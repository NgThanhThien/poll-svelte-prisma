import { fail } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { Actions, PageServerLoad } from './(unauthenticated)/$types';

export const load: PageServerLoad = async () => {
	return {
		polls: await prisma.poll.findMany({
			include: {
				poll_items: true
			}
		})
	};
};
// export const actions: Actions = {
//   createArticle: async ({request}) => {
//     const {title, content} = Object.fromEntries(await request.formData()) as {title: string, content: string}
//     try {
//       await prisma.article.create({
//         data: {
//           title,
//           content
//         }
//       })
//     } catch (error) {
//       console.error(error);
//       return fail(500, { message: 'Could not create the article'})
//     }
//     return {
//       status: 201
//     }
//   },
//   deleteArticle: async ({url}) => {
//     const id = url.searchParams.get('id');
//     if(!id) return fail(400,{message: 'Invalid request'})
//     try {
//       await prisma.article.delete({
//         where: {
//           id: Number(id)
//         }
//       })
//     } catch (error) {
//       console.error(error);
//       fail(500, { message: 'Could not delete the article'})
//     }
//     return {
//       status:200
//     }
//   }

// }
