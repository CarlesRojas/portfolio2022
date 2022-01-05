import { useRouter } from "next/router";
import Link from "next/link";

export default function Project() {
    const router = useRouter();
    return (
        <div>
            <h1>{`Project ${router.query.projectId}`}</h1>
            <Link href="/">Home</Link>
        </div>
    );
}
