export const LineArt = () => {
    return (
        <div className="line-art-container overflow-hidden">
            <div className="flex items-center justify-center w-full h-full">

                <div className="absolute line-vert animate-line-vert"></div>

                <div className="absolute line line-diag1"></div>

                <div className="absolute line line-diag2"></div>

            </div>
        </div>
    );
};

export const GrowingLines = () => {
    return (
        <div className="growing-line-container overflow-hidden">
            <div className="flex items-center justify-center w-full h-full">

                <div className="absolute line line-grow1"></div>

                <div className="absolute line line-grow2"></div>

                <div className="absolute line line-grow-bottom1"></div>

                <div className="absolute line line-grow-bottom2"></div>

            </div>
        </div>
    );
};