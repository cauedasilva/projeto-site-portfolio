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
