import { Fragment } from 'react';

export default function Loading(props) {
    return (
        <div className="flex justify-center">
            <div className={`w-12 h-12 border-4 border-t-4 border-blue-500 rounded-full animate-spin ${props.className}`} role="status"></div>
        </div>
    );
}
