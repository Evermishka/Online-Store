import Control from '../../common/control';
import { GithubLinks } from './github-links';

export class Footer extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'footer', 'footer', '');
    new GithubLinks(this.node);
    new Control(this.node, 'p', 'year', '2022');
    const rssLink: { node: HTMLLinkElement } = new Control(this.node, 'a', 'rss-link', '');
    rssLink.node.href = 'https://rs.school/js/';
  }
}
