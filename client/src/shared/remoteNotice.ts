// Remote notice disabled
export interface RemoteNotice { id: string; title: string; content: string; }
export function fetchRemoteNotice(): Promise<RemoteNotice | null> { return Promise.resolve(null); }
export function hasDismissedRemoteNotice(id: string): boolean { return true; }
export function dismissRemoteNotice(id: string) {}
