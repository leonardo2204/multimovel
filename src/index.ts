export interface Env {
    DB: D1Database;
}

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        const { pathname } = new URL(request.url);

        if (pathname === "/waiting-list") {
            const body = await request.json();

            if (!body.email) {
                return new Response("Email is required", { status: 400 });
            }

            if (!body.name) {
                return new Response("Name is required", { status: 400 });
            }

            const { DB } = env;

            const email = body.email;
            const name = body.name;
            const city = request.cf?.city;
            const country = request.cf?.country;

            const { error } = await DB.prepare(
                "INSERT INTO waiting_list (email, name, city_name, country_name) VALUES (?, ?, ?, ?)"
            ).bind(email, name, city, country).run();

            if (error) {
                return new Response("Error adding to waiting list", { status: 500 });
            }
        }

        return new Response(`Running in ${navigator.userAgent}!`);
    },
};