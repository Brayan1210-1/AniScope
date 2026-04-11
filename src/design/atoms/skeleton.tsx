interface SkeletonProps {
    style?: string
}


export function Skeleton({ style }: SkeletonProps) {

    return (
        <div className={`bg-gray-400 p-2 max-w-70 min-h-80 m-10  ${style}`} >

            <header className="bg-gray-600 max-inline-3xl">
                <p> .</p>
            </header>

            <body>
                <p> . </p>
            </body>

            <footer className="bg-gray-600 content-end">
                <p> .</p>
            </footer>

        </div>
    )
}