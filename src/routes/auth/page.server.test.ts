import { describe, test, expect, vi } from 'vitest';
import { actions } from './+page.server';
import * as database from "$lib/server/db/user";
import { redirect } from '@sveltejs/kit';

vi.mock("$lib/server/db/user", () => {
    return {
        createUser: vi.fn().mockResolvedValue({ id: 1 })
    }
})

vi.mock("@sveltejs/kit", () => {
    return {
        redirect: vi.fn()
    }
})

describe('Signup Actions', () => {
	test('Should receive data', async () => {
		const formDataObject = new FormData();
		formDataObject.set('username', 'Donny C');
		formDataObject.set('email', 'chikwemdonald@gmail.com');
		formDataObject.set('password', 'Password@123');

		const request = {
			request: {},
			formData: async () => formDataObject,
            method: "post",
            url: "/auth",
            headers: {
                "Content-Typee": "multipart/form-data"
            }
		};

        let result;

        try {
            result = await actions.signup({ request });
        } catch (err: any | {message: string}) {
            result = err?.message;
        }

        expect(database.createUser).toHaveBeenCalledOnce();
        expect(database.createUser).toHaveBeenCalledWith({
            username: "Donny C",
            email: "chikwemdonald@gmail.com",
            passwordHash: "Password@123"
        })
        expect(redirect).toHaveBeenCalledOnce();
        expect(redirect).toHaveBeenCalledWith(303, "/chat");
	});
});
