
INSERT INTO regions (name) VALUES
('East'),
('West'),
('North'),
('South'),
('Central');


INSERT INTO states (name, region_id) VALUES
('Abia', (SELECT id FROM regions WHERE name = 'East')),
('Anambra', (SELECT id FROM regions WHERE name = 'East')),
('Ebonyi', (SELECT id FROM regions WHERE name = 'East')),
('Enugu', (SELECT id FROM regions WHERE name = 'East')),
('Imo', (SELECT id FROM regions WHERE name = 'East'));

-- West Region
INSERT INTO states (name, region_id) VALUES
('Ekiti', (SELECT id FROM regions WHERE name = 'West')),
('Lagos', (SELECT id FROM regions WHERE name = 'West')),
('Ogun', (SELECT id FROM regions WHERE name = 'West')),
('Ondo', (SELECT id FROM regions WHERE name = 'West')),
('Osun', (SELECT id FROM regions WHERE name = 'West')),
('Oyo', (SELECT id FROM regions WHERE name = 'West'));

-- North Region
INSERT INTO states (name, region_id) VALUES
('Adamawa', (SELECT id FROM regions WHERE name = 'North')),
('Bauchi', (SELECT id FROM regions WHERE name = 'North')),
('Borno', (SELECT id FROM regions WHERE name = 'North')),
('Gombe', (SELECT id FROM regions WHERE name = 'North')),
('Jigawa', (SELECT id FROM regions WHERE name = 'North')),
('Kaduna', (SELECT id FROM regions WHERE name = 'North')),
('Kano', (SELECT id FROM regions WHERE name = 'North')),
('Katsina', (SELECT id FROM regions WHERE name = 'North')),
('Kebbi', (SELECT id FROM regions WHERE name = 'North')),
('Sokoto', (SELECT id FROM regions WHERE name = 'North')),
('Yobe', (SELECT id FROM regions WHERE name = 'North')),
('Zamfara', (SELECT id FROM regions WHERE name = 'North'));

-- South Region
INSERT INTO states (name, region_id) VALUES
('Akwa Ibom', (SELECT id FROM regions WHERE name = 'South')),
('Bayelsa', (SELECT id FROM regions WHERE name = 'South')),
('Cross River', (SELECT id FROM regions WHERE name = 'South')),
('Delta', (SELECT id FROM regions WHERE name = 'South')),
('Edo', (SELECT id FROM regions WHERE name = 'South')),
('Rivers', (SELECT id FROM regions WHERE name = 'South'));

-- Central Region
INSERT INTO states (name, region_id) VALUES
('Abuja', (SELECT id FROM regions WHERE name = 'Central')),
('Benue', (SELECT id FROM regions WHERE name = 'Central')),
('Kogi', (SELECT id FROM regions WHERE name = 'Central')),
('Kwara', (SELECT id FROM regions WHERE name = 'Central')),
('Nasarawa', (SELECT id FROM regions WHERE name = 'Central')),
('Niger', (SELECT id FROM regions WHERE name = 'Central')),
('Plateau', (SELECT id FROM regions WHERE name = 'Central'));

