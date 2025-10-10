import {visit, SKIP} from 'unist-util-visit';
import path from 'node:path';
import fs from 'node:fs';
import ExifReader from 'exifreader';

/**
 * Remark plugin to wrap images with figure/figcaption based on EXIF metadata
 * Works with MDX by creating JSX elements
 */
export default function remarkImageFigcaption() {
  return (tree, file) => {
    visit(tree, 'image', (node, index, parent) => {
      try {
        // Skip if already processed
        if (node.data?.processed) return;

        const imageSrc = node.url;
        if (!imageSrc || imageSrc.startsWith('http')) return;

        // Get absolute path to image
        const fileDir = path.dirname(file.path);
        let imagePath;

        if (imageSrc.startsWith('/')) {
          imagePath = path.join(process.cwd(), 'static', imageSrc);
        } else {
          imagePath = path.join(fileDir, imageSrc);
        }

        // Skip if doesn't exist
        if (!fs.existsSync(imagePath)) return;

        // Read EXIF data
        const tags = ExifReader.load(fs.readFileSync(imagePath));

        const artist = tags.Artist?.description || tags.Creator?.description;
        const copyright = tags.Copyright?.description;
        const rights = tags.rights?.description || tags.Rights?.description || tags['Rights Usage Terms']?.description;

        // Only wrap if we have metadata
        if (!artist && !copyright && !rights) return;

        // Mark the node as processed to avoid infinite loops
        node.data = node.data || {};
        node.data.processed = true;

        // Create an MDX JSX element node to use our React component
        // Pass the original image as a child so it gets processed correctly by Docusaurus
        const jsxNode = {
          type: 'mdxJsxFlowElement',
          name: 'ImageFigure',
          attributes: [
            {type: 'mdxJsxAttribute', name: 'artist', value: artist || ''},
            {type: 'mdxJsxAttribute', name: 'copyright', value: copyright || ''},
            {type: 'mdxJsxAttribute', name: 'rights', value: rights || ''}
          ],
          children: [node]  // Pass the original image node as child
        };

        // Replace the image node with the JSX component
        parent.children[index] = jsxNode;

        console.log('[remark-figcaption] Wrapped image:', imageSrc);

        // Skip visiting the newly added node
        return [SKIP, index];

      } catch (error) {
        console.warn(`[remark-figcaption] Failed to process image:`, error.message);
      }
    });
  };
}
