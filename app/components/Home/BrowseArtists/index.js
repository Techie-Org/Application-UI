import React, { useEffect, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import PropTypes from 'prop-types';
import ArtistCard from './ArtistCard';
import styles from './styles.scss';

const categories = ['All', 'singer', 'dancer', 'comedian', 'designer'];

const BrowseArtists = ({
  artists,
  // fetchArtists,
  onSelectArtist,
}) => {
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  useEffect(() => {
    if (artists?.length) {
      filterArtists();
    }
  }, [artists, searchTerm, selectedCategory, showAvailableOnly]);

  const filterArtists = () => {
    let filtered = [...artists];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((artist) => artist.category === selectedCategory);
    }

    if (showAvailableOnly) {
      filtered = filtered.filter((artist) => artist.available);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (artist) => artist.name.toLowerCase().includes(term)
          || artist.description?.toLowerCase().includes(term)
          || artist.location.toLowerCase().includes(term)
          || artist.skills.some((skill) => skill.toLowerCase().includes(term))
      );
    }

    setFilteredArtists(filtered);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        {/* Header Section */}
        <div className={styles.headerSection}>
          <h1 className={styles.title}>
            Discover Talented Artists
          </h1>
          <p className={styles.subtitle}>
            Book professional singers, dancers, comedians, and designers for your next event
          </p>
        </div>

        {/* Filter Card */}
        <div className={styles.filterCard}>
          <div className={styles.searchLayout}>
            {/* Search Input Group */}
            <div className={styles.searchField}>
              <Search className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search by name, location, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            {/* Filters Group */}
            <div className={styles.filterControls}>
              <div className={styles.searchField}>
                <Filter className={styles.searchIcon} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={styles.categorySelect}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'All' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={showAvailableOnly}
                  onChange={(e) => setShowAvailableOnly(e.target.checked)}
                  className={styles.checkbox}
                />
                <span>Available only</span>
              </label>
            </div>
          </div>

          {/* Results Footer */}
          <div className={styles.resultsFooter}>
            <span>
              {filteredArtists.length}
              {' '}
              {filteredArtists.length === 1 ? 'artist' : 'artists'}
              {' '}
              found
            </span>
            {(searchTerm || selectedCategory !== 'All' || showAvailableOnly) && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setShowAvailableOnly(false);
                }}
                className={styles.clearButton}
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Artist Grid or Empty State */}
        {filteredArtists.length === 0 ? (
          <div className={styles.headerSection}>
            <p className={styles.subtitle}>No artists found matching your criteria</p>
          </div>
        ) : (
          <div className={styles.artistGrid}>
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.artistId} artist={artist} onSelect={onSelectArtist} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

BrowseArtists.propTypes = {
  artists: PropTypes.array.isRequired,
  onSelectArtist: PropTypes.func.isRequired,
};

export default BrowseArtists;
