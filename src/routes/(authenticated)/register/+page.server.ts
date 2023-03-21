import { auth } from "$lib/server/lucia";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({locals}) => {
  const session = await locals.validate()
  if (session) throw redirect(302, '/')
}

export const actions:Actions = {
  default: async({request}) =>{
    const {name, username, password} = Object.fromEntries(await request.formData()) as Record <string, string>
    try {
      await auth.createUser({
        primaryKey: {
          providerId: "username",
          providerUserId: username,
          password
        },
        attributes: {
          name,
          username
        }
      })
    } catch (error) {
      console.error(error)
      return fail(400, {message: 'Could not create user'})
    }
    throw redirect(302, "/login")
  }
}