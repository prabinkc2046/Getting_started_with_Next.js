"use client"
const ErrorBoundaryForLayout = ({error}: {error: Error}) => {
    return(
        <div>
            <span>Error occured</span>
            <span>{error.message}</span>
        </div>
    )
};

export default ErrorBoundaryForLayout;