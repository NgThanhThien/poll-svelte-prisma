import { fail } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { Actions, PageServerLoad } from './(unauthenticated)/$types';

export const load: PageServerLoad = async () => {
	
	return {
		polls:await prisma.poll.findMany({
			select:{
				name: true,
				id: true,
				description: true,
				tag: true,
				time_end:true,
				poll_items: {
					select: {
						id: true,
						name: true,
						_count: {
							select: {
								user_poll_items: true
							}
						},
						user_poll_items: true
					}
				}
			}
		})
	};
};

