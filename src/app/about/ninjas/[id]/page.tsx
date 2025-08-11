import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ninja List | Details Page",
    description: "Details about our ninjas and activities.",
};

type Ninja = {
    id: number;
    name: string;
    email: string;
    website: string;
    address: {
        city: string;
    };
};

export async function generateStaticParams() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const ninjas: Ninja[] = await res.json();

    return ninjas.map((ninja) => ({
        id: ninja.id.toString(),
    }));
}

async function getNinja(id: string): Promise<Ninja> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return res.json();
}

export default async function DetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {

    const { id } = await params;
    const ninja = await getNinja(id);

    return (
        <>
        <h1>Details Page</h1>
        <h1>{ninja.name}</h1>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>

        <br />
        <br />
        <br />
        <br />

        <Link href="/about/ninjas">Go to Ninjas Page</Link>
        <br />
        <br />
        <Link href="/">Go to Home Page</Link>
        </>
    );
}
