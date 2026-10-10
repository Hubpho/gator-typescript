import { readConfig } from "../config"
import { addFeed } from "../lib/db/queries/feeds"
import { fetchFeed } from "../lib/rss"
import { getUser } from "../lib/db/queries/users"
import { Feed, User } from "../lib/db/schema"

export async function handlerAddFeed(cmdName: string, name: string, url: string) {
  if (!name || !url) {
    throw new Error("name and url are required");
  }
  const currentUserName = readConfig().currentUserName;
  const currentUser = await getUser(currentUserName);
  if (!currentUser) {
    throw new Error("user not found");
  }
  const feed = await addFeed(name, url, currentUser.id);
  printFeed(feed, currentUser);
}

export async function printFeed(feed: Feed, user: User) {
  console.log({ feed, user });
}
