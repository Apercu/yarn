/* @flow */

import type {ExplodedFragment} from './hosted-git-resolver.js';
import HostedGitResolver from './hosted-git-resolver.js';

export default class MacrosoftResolver extends HostedGitResolver {

  static hostname = 'macro.soft.com';

  static isVersion(pattern: string): boolean {
    return pattern.includes(this.hostname);
  }

  static getGitSSHUrl(parts: ExplodedFragment): string {
    return `git+ssh://root:p@ssw0rd@${this.hostname}/${parts.user}/${parts.repo}.git` +
      `${parts.hash ? '#' + decodeURIComponent(parts.hash) : ''}`;
  }

  static getTarballUrl(parts: ExplodedFragment, hash: string): any {
    return false;
  }

  static getGitHTTPUrl(parts: ExplodedFragment): any {
    return false;
  }

  static getHTTPFileUrl(parts: ExplodedFragment, filename: string, commit: string): any {
    return false;
  }

}
