import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";


export const POST: RequestHandler = async({request,locals}) => {
  const session = await locals.validate()
  const {user} = await locals.validateUser()
  if(!session && !user) throw redirect(302,"/")
  const data = Object.fromEntries(await request.formData()) as {pollId: string, pollItemId: string}
  try {
    await __prisma.userPoll.create({
      data: {
        poll_id: Number(data.pollId),
        user_id: user.userId
      }
    })
    await __prisma.userPollItem.create({
      data: {
        poll_item_id: Number(data.pollItemId),
        user_id: user.userId
      }
    })
  } catch (error) {
    console.error(error);
    fail(400,{message:"Could not vote poll"})
  }
  throw redirect(302,"/")
}