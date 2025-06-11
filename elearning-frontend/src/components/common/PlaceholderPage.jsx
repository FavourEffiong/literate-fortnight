function PlaceholderPage({ title }) {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mt-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This page is under construction. Content for {title} will be available soon.
        </p>
        <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-gray-500 dark:text-gray-400 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="text-lg font-medium">Content coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceholderPage;