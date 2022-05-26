import {
  UserStorage,
  Users,
  AddItemsEventData,
  AddItemsResultSummary,
  BrowserStorage,
  Identity,
} from "@spacehq/sdk";
import { Buckets, KeyInfo } from "@textile/hub";
import { generateIdentity } from "../storage/identity";

export const uploadFiles = async (
  files: File[],
  title: string,
  description: string,
  tier: string,
  account: string
) => {
  const identity = await generateIdentity();
  const keyInfo: KeyInfo = {
    key: "bwmqgtf2t6mxevg7wrudmtbebgm",
  };
  const buckets = await Buckets.withKeyInfo(keyInfo);
  const token = await buckets.getToken(identity);

  const { root, threadID } = await buckets.getOrCreate(account, {
    encrypted: true,
  });
  if (!root) throw new Error("bucket not created");
  const bucketKey = root.key;
  const uploadPromises = files.map((file) =>
    buckets.pushPath(bucketKey, `${account}/${tier}`, file.stream())
  );
  const result = await Promise.all(uploadPromises);
  return result;
};
