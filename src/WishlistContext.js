import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (pet) => {
    // Prevent duplicates
    setWishlist((prev) => {
      const exists = prev.find(item => item.id === pet.id);
      return exists ? prev : [...prev, pet];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter(p => p.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

