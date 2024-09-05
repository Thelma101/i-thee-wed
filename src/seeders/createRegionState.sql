-- Create Regions Table
CREATE TABLE regions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Create States Table
CREATE TABLE states (
    id SERIAL PRIMARY KEY,
    region_id INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    FOREIGN KEY (region_id) REFERENCES regions(id) ON DELETE SET NULL
);