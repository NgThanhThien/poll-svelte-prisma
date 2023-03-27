import { fail } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { Actions, PageServerLoad } from './(unauthenticated)/$types';

export const load: PageServerLoad = async ({url}) => {
	const page = new URL(url).searchParams.get('page');
	const totalRecords= await prisma.poll.count()
	const TAKE = 5
	return {
		
		polls: {
			data: await prisma.poll.findMany({
				orderBy:[{
					created_at: 'desc'
				}],
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
				},
				skip: (Number(page) >= 1? Number(page) - 1 : 0 ) * TAKE,
				take: TAKE
			}),
			totalPage:  Math.ceil(totalRecords / TAKE),
			currentPage: Number(page || 1) ,
			pageSize: TAKE,
			totalRecords
		}
		
		
	};
};

