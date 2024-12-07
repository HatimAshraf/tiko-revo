'use client';
import { Search } from 'lucide-react';
import Form from 'next/form';
function SearchBar() {
  return (
    <div>
      <Form action='/search' className='relative'>
        <input
          name='q'
          placeholder='Search for events...'
          className='w-full py-3 pl-12 bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus-within:ring-2
        focus:ring-orange-500 focus:border-transparent transition-all duration-200'
        />
        <Search className='absolute left-4 top-1/2 -translate-y-1/2  text-gray-400 w-4 h-4 ' />
        <button
          type='submit'
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-1.5 rounded-lg text-sm font-medium
        hover:bg-black/80 transition-colors duration-200'
        >
          Search
        </button>
      </Form>
    </div>
  );
}

export default SearchBar;
