interface SkeletonProps {

}


export function Skeleton() {

    return (
        <div className="bg-gray-300 p-2 max-w-70 min-h-80 m-10 columns-2">

            <div className="justify-items-start row-span-4 min-160">
                <h1 className="bg-gray-400 size-full"> . </h1>
                <h2 className="h-100 w-31 bg-gray-400 p-10 mb-px-0.5">. </h2>
            </div>

            <div className="justify-items-end">
                <h1>-.</h1>
            </div>


        </ div>
    )
}