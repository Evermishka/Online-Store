import Control from '../../common/control';

export class GithubLinks extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'github', '');
    new Control(this.node, 'p', 'github__text', `Created by`);
    const githubLinksWrapper = new Control(this.node, 'div', 'github__links-wrapper', ``);
    const githubLinkEvermiska: { node: HTMLLinkElement } = new Control(
      githubLinksWrapper.node,
      'a',
      'github__link',
      'Evermishka'
    );
    githubLinkEvermiska.node.href = 'https://github.com/Evermishka';
    new Control(githubLinksWrapper.node, 'p', 'github__text-dop', `and`);
    const githubLinkPain4metoo: { node: HTMLLinkElement } = new Control(
      githubLinksWrapper.node,
      'a',
      'github__link',
      'pain4metoo'
    );
    githubLinkPain4metoo.node.href = 'https://github.com/pain4metoo';
  }
}
