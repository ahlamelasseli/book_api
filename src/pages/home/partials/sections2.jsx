import React, { useState, useEffect } from 'react';

const Sections2 = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('fiction');

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}&limit=12`);
                
                const data = await response.json();
                
                const booksWithCovers = data.docs.filter(book => book.cover_i);
                
                setBooks(booksWithCovers.slice(0, 12));
                
                setLoading(false);
                
            } catch (error) {
                console.log('Error getting books:', error);
                setLoading(false);
            }
        };

        getBooks();
    }, []); 


    if (loading) {
        return (
            <div className="p-8 bg-white min-h-screen">
                <h1 className="text-3xl font-semibold mb-6 text-[#213448]">Best Books</h1>
                <div className="flex justify-center items-center h-64">
                    <div className="text-lg text-gray-600">Loading amazing books for you...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8 bg-white min-h-screen">
            <h1 className="text-3xl font-semibold mb-6 text-[#213448]">Best Books</h1>
            
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.length > 0 ? books.map((book, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-all cursor-pointer"
                    >
                        <img
                            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                            alt={book.title}
                            className="w-full h-48 object-cover rounded mb-4"
                            onError={(e) => {
                                e.target.src = '/api/placeholder/200/300';
                            }}
                        />
                        
                        <h3 className="font-bold text-lg text-[#213448] mb-2 line-clamp-2">
                            {book.title}
                        </h3>
                        
                        <p className="text-[#537D5D] mb-2">
                            By: {book.author_name ? book.author_name[0] : 'Unknown Author'}
                        </p>
                        
                        <p className="text-gray-600 text-sm mb-3">
                            Published: {book.first_publish_year || 'Unknown'}
                        </p>
                        
                        {book.subject && book.subject.length > 0 && (
                            <div className="mb-3">
                                <span className="inline-block bg-[#F4F1E6] text-[#537D5D] text-xs px-2 py-1 rounded-full">
                                    {book.subject[0]}
                                </span>
                            </div>
                        )}
                        
                        <button className="w-full bg-[#537D5D] text-white px-4 py-2 rounded hover:bg-[#73946B] transition-colors">
                            View Details
                        </button>
                    </div>
                )) : (
                    <div className="col-span-full text-center py-12">
                        <p className="text-gray-600 text-lg">No books found. Try searching for something else!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sections2;