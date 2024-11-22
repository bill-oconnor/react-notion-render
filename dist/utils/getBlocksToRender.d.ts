import { ParsedBlock } from '../types/Block';
import { NotionBlock } from '../types/NotionBlock';
/**
 * The objetive of this function its remove blocks that are not supported and
 * put together the items of the same list to render easily
 * @param blocks the entire list of blocks
 * @returns
 */
export default function getBlocksToRender(blocks: NotionBlock[]): ParsedBlock[];
