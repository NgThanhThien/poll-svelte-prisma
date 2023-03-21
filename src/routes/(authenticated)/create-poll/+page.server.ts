import { auth } from '$lib/server/lucia';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { null_to_empty } from 'svelte/internal';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.validate();
	if (!session) {
		throw redirect(302, '/');
	}
};
export const actions: Actions = {
	default: async ({ request, locals }) => {
		const { user, session } = await locals.validateUser();
		if (!(user && session)) {
			throw redirect(302, '/');
		}
		let data;
		const { name, description, type, tag, time_end } = Object.fromEntries(
			await request.formData()
		) as {
			name: string;
			description: string;
			type: string;
			tag: string;
			time_end: string;
		};
		try {
			data = await __prisma.poll.create({
				data: {
					name,
					description,
					tag,
					user_id: user.userId,
					type,
					time_end: new Date(time_end)
				}
			});
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Could not create the poll' });
		}
		console.log('data', data);
		return;
		// throw redirect(302);
	}
	// deleteArticle: async ({url}) => {
	//   const id = url.searchParams.get('id');
	//   if(!id) return fail(400,{message: 'Invalid request'})
	//   try {
	//     await prisma.article.delete({
	//       where: {
	//         id: Number(id)
	//       }
	//     })
	//   } catch (error) {
	//     console.error(error);
	//     fail(500, { message: 'Could not delete the article'})
	//   }
	//   return {
	//     status:200
	//   }
	// }
};
