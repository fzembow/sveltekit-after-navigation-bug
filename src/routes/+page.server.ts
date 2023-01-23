import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async () => {
		throw redirect(302, `/other-page`);
	}
};
