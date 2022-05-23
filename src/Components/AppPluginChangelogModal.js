import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const AppPluginChangelogModal = props => {
    const {
        item,
        close,
        update,
        ...attributes
    } = props;

    console.log(item);

    return (
        <div className="fixed z-[500] inset-0 overflow-y-auto" {...attributes}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500/75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom rounded text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" id="modal-headline">
                            {item.name} - {item.release.version}
                        </h3>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 text-sm text-gray-500 dark:text-gray-300">
                        <div className="prose-sm max-w-none">
                            <ReactMarkdown children={item.release.changelog} />
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button"
                            className="mt-3 w-full dark:text-white sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm bg-orange-300 dark:bg-orange-700 hover:bg-orange-400 dark:hover:bg-orange-600 font-bold py-2 px-4 inline-flex justify-center rounded-md"
                            data-slug={item.slug} onClick={update}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                            </svg>
                            Install Update
                        </button>
                        <button type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-700 shadow-sm px-4 py-2 bg-white dark:bg-gray-600 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={close}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


AppPluginChangelogModal.propTypes = {
    item: PropTypes.object,
    close: PropTypes.func,
    install: PropTypes.func
}

export default AppPluginChangelogModal;
