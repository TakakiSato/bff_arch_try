// 何をレスポンスするかの処理を書く。

import { memberList } from '@/data';

export const getMemberList = () => Promise.resolve(memberList);