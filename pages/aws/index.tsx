import ServicePreview from "../../components/Aws/ServicePreview";
import PageTransition from "../../components/Layouts/PageTransition";

import { chunk } from "moderndash";
import { AWS_SERVICES } from "../../lib/aws";
import { searchForSimilar } from "../../lib/search";
import { useMemo, useState } from "react";
import Head from "next/head";
const everyThree = chunk(AWS_SERVICES, 3);

export default function AWSLanding() {
  const [searchQuery, setSearchQuery] = useState("");
  const searchResults = useMemo(() => searchForSimilar(searchQuery, AWS_SERVICES), [searchQuery]);

  return <>
    <Head>
      <meta property="og:image" content="/aws_logo.png" />
      <meta property="og:title" content="AWS Services: Explained | Nico's site" />
      <meta name="description" content="A simple explanation of popular AWS services." />
      <meta property="og:description" content="A simple explanation of popular AWS services." />
    </Head>
    <PageTransition>
      <div className="text-white mb-2">
        <h1 className="text-6xl font-bold mb-2">AWS Services: Explained</h1>
        <p>
          Clear, concise explanations of popular AWS services. This was created because I noticed a lot of people at school had difficulty understanding why AWS has so many services and how similar ones are actually different from each other.
          Because of the beginner-intermediate target audience, I&apos;ve tried to keep the explanations as simple as possible. If you have any suggestions or feedback, reach out to me through GitHub.
        </p>
      </div>

      <div className="mb-6">
        <input type="search" onChange={(event) => setSearchQuery(event.target.value)} className="w-full p-4 pl-8 text-md rounded-lg bg-slate-800 text-gray-100" placeholder="Search for a specific service..." />
        <a className="text-white mt-1 text-sm hover:underline" href="https://github.com/zaida04/nico.engineer/issues/new">Missing a service we should have? Let me know.</a>
      </div>

      <div className="md:columns-2 gap-4 text-white">
        <ServiceResults searchQuery={searchQuery} searchResults={searchResults} />
      </div>
    </PageTransition>
  </>
}

export function ServiceResults(props: { searchQuery: string, searchResults: typeof AWS_SERVICES[number][] }) {
  if (props.searchQuery === "") return <>
    {everyThree.map((three, i) =>
      <div key={i} className="grid gap-4">
        {three.map((service, i) => <ServicePreview key={i} name={service.name} tags={service.tags} description={service.description} />)}
      </div>
    )}
  </>

  if (props.searchResults.length === 0) return <div className="text-yellow-500 text-2xl">No results found.</div>

  return <>{props.searchResults.map((service, i) => <ServicePreview key={i} name={service.name} tags={service.tags} description={service.description} />)}</>
}
