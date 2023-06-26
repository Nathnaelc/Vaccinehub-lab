\echo 'Delete and recreate vaccine_registration db? (y/n)'
\prompt 'Return for yes or control-C to cancel > ' answer


DROP DATABASE vaccine_registration;
CREATE DATABASE vaccine_registration;
\connect vaccine_registration;

\i vaccine-registration-schema.sql