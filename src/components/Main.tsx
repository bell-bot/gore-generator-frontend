'use client';

import {Form} from "@/components/Form";
import OutputWrapper from "@/components/OutputWrapper";
import {useState} from "react";

export default function Main() {

    const [goreUrl, setGoreUrl] = useState<string>();
    return (
        <>
            <div className="w-screen h-screen" id="main">
                <header className="bg-gray-700 shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight text-indigo-50 text-center">
                            Gore Generator
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="w-full h-full px-4 py-6 sm:px-6 lg:px-8">
                        <div className="flex flex-row gap-5">
                            <Form setGoreUrl={setGoreUrl}/>
                            <OutputWrapper generatorOutputUrl={goreUrl}/>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}