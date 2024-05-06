if (typeof window !== 'undefined') {
    // Import boxicons only in the client-side environment
    import('boxicons');
}
export default function Widget({widget}) {
    /*if (widget === "spotify") {
        return (
            <h1>Spotify</h1>
        )
    }*/
    /*return (
        <h1>{widget.name}</h1>
    )*/
    if (widget.name === "Spotify") {
        return (
            <div className="widget bg-green-500 w-full">
                <div className="flex gap-1">
                    <box-icon name='spotify' type='logo' color='#ffffff' ></box-icon>
                    <h1>Spotify</h1>
                </div>
            </div>
        )
    } else if (widget.name === "Tasks") {
        return (
            <div className="widget bg-red-500 w-full">
                <div className="flex gap-1">
                    <box-icon name='list-check' color='#ffffff' ></box-icon>
                    <h1>Tasks</h1>
                </div>
            </div>
        )
    } else if (widget.name === "Calendar") {
        return (
            <div className="widget bg-blue-500 w-full">
                <div className="flex gap-1">
                    {/*<box-icon name='spotify' type='logo' color='#ffffff' ></box-icon>*/}
                    <h1>Calendar</h1>
                </div>
            </div>
        )
    } /*else if (widget.name === "Focus") {
        return (
            <div className="widget bg-yellow-500 w-full">
                <div className="flex gap-1">
                    <box-icon name='spotify' type='logo' color='#ffffff' ></box-icon>
                    <h1>Focus</h1>
                </div>
                <div className="focus-contents flex gap-1">
                    <div className="focus-duration flex align-bottom">
                    <input
                            type="number" 
                            className="focus-duration-select bg-transparent border-0 outline-none w-12 placeholder-white text-5xl" 
                            placeholder="0"
                        />
                        <p>hours</p>
                        <input type="number" className="focus-duration-select bg-transparent border-0 outline-none w-12 placeholder-white text-5xl" placeholder="0"/>
                        <p>mins</p>
                    </div>
                    
                </div>
            </div>
        )
    }*/
}