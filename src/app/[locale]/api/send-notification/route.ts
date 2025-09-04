import {NextResponse} from 'next/server';

export async function POST( req: Request ) {
    try {
        const body = await req.json();
        const {email} = body;

        if (!email || typeof email !== 'string') {
            return NextResponse.json(
                {error: 'Email field is required and must be a valid string.'},
                {status: 400}
            );
        }


        const url = process.env.N8N_URL!;
        const response = await fetch(
            url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*", // Often not needed for client-side requests to your own backend
                },
                body: JSON.stringify({email}),
            }
        );

        if (!response) {
            return NextResponse.json(
                {error: 'An unexpected error occurred.'},
                {status: 500}
            );
        }

        const nextReturn = {success: true, message: 'Email received successfully!', email};

        return NextResponse.json(nextReturn, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {error: 'An unexpected error occurred.'},
            {status: 500}
        );
    }
}