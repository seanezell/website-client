import React from 'react';
import { FaRocket } from 'react-icons/fa';

const PlaceholderProjectCard = () => {
    return (
        <div className="group relative rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 p-8 flex flex-col items-center justify-center min-h-[300px] hover:border-primary-400 dark:hover:border-primary-600 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-all duration-300">
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="p-4 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all duration-300 group-hover:scale-110">
                    <FaRocket size={32} />
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-slate-600 dark:text-slate-400 mb-2">
                        Next Project Coming Soon
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        Stay tuned for more exciting work
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PlaceholderProjectCard;
