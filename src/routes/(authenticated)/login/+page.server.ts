import { auth } from '$lib/server/lucia';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({locals}) => {
  const session = await locals.validate()
  if(session) {
    throw redirect(302, "/")
  }
};

export const actions: Actions = {
  default: async({request, locals}) =>{
    const {username, password} = Object.fromEntries(await request.formData()) as Record <string, string>
    try {
      const key = await auth.useKey("username", username, password)
      const session = await auth.createSession(key.userId)
      locals.setSession(session)
    } catch (error) {
      console.error(error);
      return fail(400,{message:"Could not login user"})
    }
    throw redirect(300,"/")
  }
}