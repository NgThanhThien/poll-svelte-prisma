import { auth } from '$lib/server/lucia';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { null_to_empty } from 'svelte/internal';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
  const { id } = params;
  const session = await locals.validate();
  if (!(session && id)) {
    throw redirect(302, '/');
  }
  return {
    poll: await __prisma.poll.findUnique({
      where: {
        id: Number(id),
      },
    }),
  };
};

export const actions: Actions = {
  default: async ({ request, locals, params }) => {
    const { id } = params;
    const { user, session } = await locals.validateUser();
    if (!(user && session)) {
      throw redirect(302, '/');
    }
    const data = Object.fromEntries(await request.formData());
    try {
      Object.values(data).forEach(async (v) => {
        await __prisma.pollItem.create({
          data: {
            name: v + '',
            poll_id: Number(id),
          },
        });
      });
    } catch (error) {
      console.error(error);
      return fail(500, { message: 'Could not create the poll item' });
    }
    throw redirect(302, '/');
  },
};
