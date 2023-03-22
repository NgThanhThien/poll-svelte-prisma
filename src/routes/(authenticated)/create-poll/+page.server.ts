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
		const { name, description, type, tag, time_end, item_1, item_2, item_3, item_4 } =
			Object.fromEntries(await request.formData()) as {
				name: string;
				description: string;
				type: string;
				tag: string;
				time_end: string;
				item_1: string;
				item_2: string;
				item_3: string;
				item_4: string;
			};
		try {
			let data = await __prisma.poll.create({
				data: {
					name,
					description,
					tag,
					user_id: user.userId,
					type,
					time_end: new Date(time_end)
				}
			});
			if (data.id) {
				[item_1, item_2, item_3, item_4].forEach(async (v) => {
					if (v)
						await __prisma.pollItem.create({
							data: {
								name: v + '',
								poll_id: Number(data.id)
							}
						});
				});
			}
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Could not create the poll' });
		}
		throw redirect(302, `/`);
	}
};
