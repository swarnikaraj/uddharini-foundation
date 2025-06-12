"use client";
import { useState, useEffect } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Gallery.css";

// Placeholder data with different sizes
const placeholderItems = [
  {
    id: 1,
    type: "image",
    width: 300,
    height: 400,
    title: "Feeding Street Dogs",
    author: "Priya, Age 12",
    likes: 24,
    comments: 5,
    challenge: "Animal Care",
  },
  {
    id: 2,
    type: "image",
    width: 300,
    height: 200,
    title: "Plant Milk Recipe",
    author: "Arjun, Age 10",
    likes: 18,
    comments: 3,
    challenge: "Healthy Living",
  },
  {
    id: 3,
    type: "video",
    width: 300,
    height: 350,
    title: "Tree Planting Day",
    author: "Kavya, Age 14",
    likes: 31,
    comments: 8,
    challenge: "Environment",
  },
  {
    id: 4,
    type: "image",
    width: 300,
    height: 450,
    title: "Bird Water Station",
    author: "Rohan, Age 11",
    likes: 42,
    comments: 12,
    challenge: "Wildlife Help",
  },
  {
    id: 5,
    type: "image",
    width: 300,
    height: 250,
    title: "Go Vegan",
    author: "Ananya, Age 9",
    likes: 27,
    comments: 6,
    challenge: "Family Care",
  },
  {
    id: 6,
    type: "image",
    width: 300,
    height: 380,
    title: "Rescued Kitten",
    author: "Karan, Age 13",
    likes: 19,
    comments: 4,
    challenge: "Animal Rescue",
  },
  {
    id: 7,
    type: "video",
    width: 300,
    height: 300,
    title: "Cooking Vegan Meal",
    author: "Meera, Age 15",
    likes: 56,
    comments: 15,
    challenge: "Healthy Cooking",
  },
  {
    id: 8,
    type: "image",
    width: 300,
    height: 420,
    title: "Community Garden",
    author: "Vikram, Age 12",
    likes: 33,
    comments: 9,
    challenge: "Environment",
  },
  {
    id: 9,
    type: "image",
    width: 300,
    height: 280,
    title: "Reading to Kids",
    author: "Sita, Age 13",
    likes: 28,
    comments: 7,
    challenge: "Education",
  },
  {
    id: 10,
    type: "image",
    width: 300,
    height: 360,
    title: "Beach Cleanup",
    author: "Raj, Age 11",
    likes: 45,
    comments: 11,
    challenge: "Environment",
  },
  {
    id: 11,
    type: "video",
    width: 300,
    height: 320,
    title: "Animal Rescue",
    author: "Maya, Age 14",
    likes: 22,
    comments: 6,
    challenge: "Wellness",
  },
  {
    id: 12,
    type: "image",
    width: 300,
    height: 400,
    title: "Feeding pigs",
    author: "Dev, Age 12",
    likes: 38,
    comments: 9,
    challenge: "Sustainable Living",
  },
  // Add more items to test pagination
  {
    id: 13,
    type: "image",
    width: 300,
    height: 350,
    title: "Planting Trees",
    author: "Ravi, Age 10",
    likes: 35,
    comments: 8,
    challenge: "Environment",
  },
  {
    id: 14,
    type: "video",
    width: 300,
    height: 280,
    title: "Helping Elderly",
    author: "Sneha, Age 13",
    likes: 29,
    comments: 5,
    challenge: "Community Service",
  },
  {
    id: 15,
    type: "image",
    width: 300,
    height: 400,
    title: "Water Conservation",
    author: "Amit, Age 12",
    likes: 41,
    comments: 10,
    challenge: "Environment",
  },
  {
    id: 16,
    type: "image",
    width: 300,
    height: 320,
    title: "Animal Shelter Visit",
    author: "Pooja, Age 14",
    likes: 33,
    comments: 7,
    challenge: "Animal Care",
  },
];

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]); // Store all items for pagination
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [paginationType, setPaginationType] = useState("loadmore"); // 'pages' or 'loadmore'
  const itemsPerPage = 8; // Reduced for better pagination demo

  useEffect(() => {
    fetchAllItems();
  }, []);

  useEffect(() => {
    if (allItems.length > 0) {
      paginateItems(currentPage);
    }
  }, [currentPage, allItems, paginationType]);

  const fetchAllItems = async () => {
    setLoading(true);
    try {
      // TODO: Uncomment when API is ready
      // const response = await fetch(`/api/gallery`);
      // const data = await response.json();
      // setAllItems(data.items);
      // setTotalItems(data.totalItems);

      // Placeholder implementation
      await new Promise((resolve) => setTimeout(resolve, 500));
      setAllItems(placeholderItems);
      setTotalItems(placeholderItems.length);
      setTotalPages(Math.ceil(placeholderItems.length / itemsPerPage));
    } catch (error) {
      console.error("Error fetching gallery items:", error);
    } finally {
      setLoading(false);
    }
  };

  const paginateItems = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = allItems.slice(startIndex, endIndex);

    if (paginationType === "loadmore" && page > 1) {
      setItems((prev) => [...prev, ...pageItems]);
    } else {
      setItems(pageItems);
      // Scroll to top when changing pages (except load more)
      if (paginationType === "pages") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const loadMore = () => {
    if (currentPage < totalPages && !loading) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const togglePaginationType = () => {
    setPaginationType((prev) => (prev === "pages" ? "loadmore" : "pages"));
    setCurrentPage(1);
    setItems([]);
  };

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const navigateModal = (direction) => {
    const currentIndex = allItems.findIndex(
      (item) => item.id === selectedItem.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = currentIndex < allItems.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : allItems.length - 1;
    }

    setSelectedItem(allItems[newIndex]);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <h2 className="gallery-title">🎨 Kindness Gallery 🎨</h2>
          <p className="gallery-subtitle">
            Amazing photos and videos from volunteers making difference!
          </p>
        </div>

        {/* Gallery Stats */}
        <div className="gallery-stats">
          <div className="stat-item">
            <span className="stat-number">{totalItems}</span>
            <span className="stat-label">Total Photos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{currentPage}</span>
            <span className="stat-label">Current Page</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{items.length}</span>
            <span className="stat-label">Showing</span>
          </div>
        </div>

        {/* Pinterest Grid */}
        <div className="pinterest-grid">
          {items.map((item) => (
            <div
              key={`${item.id}-${currentPage}`}
              className="gallery-card"
              onClick={() => openModal(item)}
            >
              <div className="card-media">
                <img
                  src={`https://placehold.co/${item.width}x${
                    item.height
                  }/10b981/ffffff?text=${encodeURIComponent(item.title)}`}
                  alt={item.title}
                  className="card-image"
                  loading="lazy"
                />
                {item.type === "video" && (
                  <div className="video-overlay">
                    <FaPlay className="play-icon" />
                  </div>
                )}
                <div className="card-overlay"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {paginationType === "loadmore" && currentPage < totalPages && (
          <div className="load-more-container">
            <button
              onClick={loadMore}
              disabled={loading}
              className="load-more-btn"
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Loading...
                </>
              ) : (
                `Load More Amazing Stories (${
                  totalItems - items.length
                } remaining)`
              )}
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && items.length === 0 && (
          <div className="loading-grid">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="skeleton-card">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                  <div className="skeleton-line"></div>
                  <div className="skeleton-line short"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal - Same as before */}
      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <button
              className="modal-nav prev"
              onClick={() => navigateModal("prev")}
            >
              <FaChevronLeft />
            </button>

            <button
              className="modal-nav next"
              onClick={() => navigateModal("next")}
            >
              <FaChevronRight />
            </button>

            <div className="modal-media">
              <img
                src={`https://placehold.co/${selectedItem.width}x${
                  selectedItem.height
                }/10b981/ffffff?text=${encodeURIComponent(selectedItem.title)}`}
                alt={selectedItem.title}
                className="modal-image"
              />
              {selectedItem.type === "video" && (
                <div className="video-overlay">
                  <FaPlay className="play-icon large" />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
