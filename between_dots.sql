CREATE FUNCTION between_dots(lat1 float, lon1 float, lat2 float, lon2 float) RETURNS float
  BEGIN

    declare d_lon float;
    declare x float;
    declare y float;

    set lat1 = lat1 * pi() / 180;
    set lon1 = lon1 * pi() / 180;
    set lat2 = lat2 * pi() / 180;
    set lon2 = lon2 * pi() / 180;

    set d_lon = lon1 - lon2;

    set y = POWER(COS(lat2) * SIN(d_lon), 2) + POWER(COS(lat1) * SIN(lat2) - SIN(lat1) * COS(lat2) * COS(d_lon), 2);
    set x = SIN(lat1) * SIN(lat2) + COS(lat1) * COS(lat2) * COS(d_lon);

    RETURN ATAN2(SQRT(y), x) * 6372795;
  END;
