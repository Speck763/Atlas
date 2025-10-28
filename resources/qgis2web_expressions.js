// Aggregates

// Color

// Conditionals

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.LN10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_coalesce(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1rule0_eval_expression(context) {
    // "Energ CD" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Energ CD')  == 0);
    } else {
        return (feature.get('Energ CD')  == 0);
    }
}


function Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1rule1_eval_expression(context) {
    // "Energ CD" > 0 AND "Energ CD" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ CD')  > 0) && (feature.get('Energ CD')  <= 10));
    } else {
        return ((feature.get('Energ CD')  > 0) && (feature.get('Energ CD')  <= 10));
    }
}


function Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1rule2_eval_expression(context) {
    // "Energ CD" > 10 AND "Energ CD" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ CD')  > 10) && (feature.get('Energ CD')  <= 20));
    } else {
        return ((feature.get('Energ CD')  > 10) && (feature.get('Energ CD')  <= 20));
    }
}


function Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1rule3_eval_expression(context) {
    // "Energ CD" > 20 AND "Energ CD" <= 30

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ CD')  > 20) && (feature.get('Energ CD')  <= 30));
    } else {
        return ((feature.get('Energ CD')  > 20) && (feature.get('Energ CD')  <= 30));
    }
}


function Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1rule4_eval_expression(context) {
    // "Energ CD" > 30 AND "Energ CD" <= 40

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ CD')  > 30) && (feature.get('Energ CD')  <= 40));
    } else {
        return ((feature.get('Energ CD')  > 30) && (feature.get('Energ CD')  <= 40));
    }
}


function Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1rule5_eval_expression(context) {
    // "Energ CD" > 40 AND "Energ CD" <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ CD')  > 40) && (feature.get('Energ CD')  <= 50));
    } else {
        return ((feature.get('Energ CD')  > 40) && (feature.get('Energ CD')  <= 50));
    }
}


function Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1rule6_eval_expression(context) {
    // "Energ CD" > 50 AND "Energ CD" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ CD')  > 50) && (feature.get('Energ CD')  <= 60));
    } else {
        return ((feature.get('Energ CD')  > 50) && (feature.get('Energ CD')  <= 60));
    }
}


function Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1rule7_eval_expression(context) {
    // "Energ CD" > 60 AND "Energ CD" <= 70

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ CD')  > 60) && (feature.get('Energ CD')  <= 70));
    } else {
        return ((feature.get('Energ CD')  > 60) && (feature.get('Energ CD')  <= 70));
    }
}


function Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1rule8_eval_expression(context) {
    // "Energ CD" > 70 AND "Energ CD" <= 80

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ CD')  > 70) && (feature.get('Energ CD')  <= 80));
    } else {
        return ((feature.get('Energ CD')  > 70) && (feature.get('Energ CD')  <= 80));
    }
}


function Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1rule9_eval_expression(context) {
    // "Energ CD" > 80 AND "Energ CD" <= 90

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ CD')  > 80) && (feature.get('Energ CD')  <= 90));
    } else {
        return ((feature.get('Energ CD')  > 80) && (feature.get('Energ CD')  <= 90));
    }
}


function Energaporgasificacindeaserrnvirutaestoconescostaneros_2rule0_eval_expression(context) {
    // "Energ Gasi" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Energ Gasi')  == 0);
    } else {
        return (feature.get('Energ Gasi')  == 0);
    }
}


function Energaporgasificacindeaserrnvirutaestoconescostaneros_2rule1_eval_expression(context) {
    // "Energ Gasi" > 0 AND "Energ Gasi" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ Gasi')  > 0) && (feature.get('Energ Gasi')  <= 10));
    } else {
        return ((feature.get('Energ Gasi')  > 0) && (feature.get('Energ Gasi')  <= 10));
    }
}


function Energaporgasificacindeaserrnvirutaestoconescostaneros_2rule2_eval_expression(context) {
    // "Energ Gasi" > 10 AND "Energ Gasi" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ Gasi')  > 10) && (feature.get('Energ Gasi')  <= 20));
    } else {
        return ((feature.get('Energ Gasi')  > 10) && (feature.get('Energ Gasi')  <= 20));
    }
}


function Energaporgasificacindeaserrnvirutaestoconescostaneros_2rule3_eval_expression(context) {
    // "Energ Gasi" > 20 AND "Energ Gasi" <= 30

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ Gasi')  > 20) && (feature.get('Energ Gasi')  <= 30));
    } else {
        return ((feature.get('Energ Gasi')  > 20) && (feature.get('Energ Gasi')  <= 30));
    }
}


function Energaporgasificacindeaserrnvirutaestoconescostaneros_2rule4_eval_expression(context) {
    // "Energ Gasi" > 30 AND "Energ Gasi" <= 40

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ Gasi')  > 30) && (feature.get('Energ Gasi')  <= 40));
    } else {
        return ((feature.get('Energ Gasi')  > 30) && (feature.get('Energ Gasi')  <= 40));
    }
}


function Energaporgasificacindeaserrnvirutaestoconescostaneros_2rule5_eval_expression(context) {
    // "Energ Gasi" > 40 AND "Energ Gasi" <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ Gasi')  > 40) && (feature.get('Energ Gasi')  <= 50));
    } else {
        return ((feature.get('Energ Gasi')  > 40) && (feature.get('Energ Gasi')  <= 50));
    }
}


function Energaporgasificacindeaserrnvirutaestoconescostaneros_2rule6_eval_expression(context) {
    // "Energ Gasi" > 50 AND "Energ Gasi" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ Gasi')  > 50) && (feature.get('Energ Gasi')  <= 60));
    } else {
        return ((feature.get('Energ Gasi')  > 50) && (feature.get('Energ Gasi')  <= 60));
    }
}


function Energaporgasificacindeaserrnvirutaestoconescostaneros_2rule7_eval_expression(context) {
    // "Energ Gasi" > 60 AND "Energ Gasi" <= 70

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energ Gasi')  > 60) && (feature.get('Energ Gasi')  <= 70));
    } else {
        return ((feature.get('Energ Gasi')  > 60) && (feature.get('Energ Gasi')  <= 70));
    }
}


function Aserrnvirutaestoconescostaneros_3rule0_eval_expression(context) {
    // "Biomasa di" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Biomasa di')  == 0);
    } else {
        return (feature.get('Biomasa di')  == 0);
    }
}


function Aserrnvirutaestoconescostaneros_3rule1_eval_expression(context) {
    // "Biomasa di" > 0 AND "Biomasa di" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa di')  > 0) && (feature.get('Biomasa di')  <= 1000));
    } else {
        return ((feature.get('Biomasa di')  > 0) && (feature.get('Biomasa di')  <= 1000));
    }
}


function Aserrnvirutaestoconescostaneros_3rule2_eval_expression(context) {
    // "Biomasa di" > 1000 AND "Biomasa di" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa di')  > 1000) && (feature.get('Biomasa di')  <= 2000));
    } else {
        return ((feature.get('Biomasa di')  > 1000) && (feature.get('Biomasa di')  <= 2000));
    }
}


function Aserrnvirutaestoconescostaneros_3rule3_eval_expression(context) {
    // "Biomasa di" > 2000 AND "Biomasa di" <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa di')  > 2000) && (feature.get('Biomasa di')  <= 3000));
    } else {
        return ((feature.get('Biomasa di')  > 2000) && (feature.get('Biomasa di')  <= 3000));
    }
}


function Aserrnvirutaestoconescostaneros_3rule4_eval_expression(context) {
    // "Biomasa di" > 3000 AND "Biomasa di" <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa di')  > 3000) && (feature.get('Biomasa di')  <= 4000));
    } else {
        return ((feature.get('Biomasa di')  > 3000) && (feature.get('Biomasa di')  <= 4000));
    }
}


function Aserrnvirutaestoconescostaneros_3rule5_eval_expression(context) {
    // "Biomasa di" > 4000 AND "Biomasa di" <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa di')  > 4000) && (feature.get('Biomasa di')  <= 5000));
    } else {
        return ((feature.get('Biomasa di')  > 4000) && (feature.get('Biomasa di')  <= 5000));
    }
}


function EnergadePlantacionesforestales_4rule0_eval_expression(context) {
    // Energa = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Energa')  == 0);
    } else {
        return (feature.get('Energa')  == 0);
    }
}


function EnergadePlantacionesforestales_4rule1_eval_expression(context) {
    // Energa > 0 AND Energa <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energa')  > 0.0) && (feature.get('Energa')  <= 100));
    } else {
        return ((feature.get('Energa')  > 0.0) && (feature.get('Energa')  <= 100));
    }
}


function EnergadePlantacionesforestales_4rule2_eval_expression(context) {
    // Energa > 100 AND Energa <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energa')  > 100) && (feature.get('Energa')  <= 200));
    } else {
        return ((feature.get('Energa')  > 100) && (feature.get('Energa')  <= 200));
    }
}


function EnergadePlantacionesforestales_4rule3_eval_expression(context) {
    // Energa > 200 AND Energa <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energa')  > 200) && (feature.get('Energa')  <= 300));
    } else {
        return ((feature.get('Energa')  > 200) && (feature.get('Energa')  <= 300));
    }
}


function EnergadePlantacionesforestales_4rule4_eval_expression(context) {
    // Energa > 300 AND Energa <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energa')  > 300) && (feature.get('Energa')  <= 400));
    } else {
        return ((feature.get('Energa')  > 300) && (feature.get('Energa')  <= 400));
    }
}


function EnergadePlantacionesforestales_4rule5_eval_expression(context) {
    // Energa > 400 AND Energa <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energa')  > 400) && (feature.get('Energa')  <= 500));
    } else {
        return ((feature.get('Energa')  > 400) && (feature.get('Energa')  <= 500));
    }
}


function EnergadePlantacionesforestales_4rule6_eval_expression(context) {
    // Energa > 500 AND Energa <= 600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energa')  > 500) && (feature.get('Energa')  <= 600));
    } else {
        return ((feature.get('Energa')  > 500) && (feature.get('Energa')  <= 600));
    }
}


function EnergadePlantacionesforestales_4rule7_eval_expression(context) {
    // Energa > 600 AND Energa <= 700

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energa')  > 600) && (feature.get('Energa')  <= 700));
    } else {
        return ((feature.get('Energa')  > 600) && (feature.get('Energa')  <= 700));
    }
}


function EnergadePlantacionesforestales_4rule8_eval_expression(context) {
    // Energa > 700 AND Energa <= 800

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energa')  > 700) && (feature.get('Energa')  <= 800));
    } else {
        return ((feature.get('Energa')  > 700) && (feature.get('Energa')  <= 800));
    }
}


function EnergadePlantacionesforestales_4rule9_eval_expression(context) {
    // Energa > 800 AND Energa <= 900

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energa')  > 800) && (feature.get('Energa')  <= 900));
    } else {
        return ((feature.get('Energa')  > 800) && (feature.get('Energa')  <= 900));
    }
}


function EnergadePlantacionesforestales_4rule10_eval_expression(context) {
    // Energa > 900 AND Energa <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Energa')  > 900) && (feature.get('Energa')  <= 1000));
    } else {
        return ((feature.get('Energa')  > 900) && (feature.get('Energa')  <= 1000));
    }
}


function BiomasadePlantacionesforestales_5rule0_eval_expression(context) {
    // Biomasa = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Biomasa')  == 0);
    } else {
        return (feature.get('Biomasa')  == 0);
    }
}


function BiomasadePlantacionesforestales_5rule1_eval_expression(context) {
    // Biomasa > 0 AND Biomasa <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 0) && (feature.get('Biomasa')  <= 500));
    } else {
        return ((feature.get('Biomasa')  > 0) && (feature.get('Biomasa')  <= 500));
    }
}


function BiomasadePlantacionesforestales_5rule2_eval_expression(context) {
    // Biomasa > 500 AND Biomasa <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 500) && (feature.get('Biomasa')  <= 1000));
    } else {
        return ((feature.get('Biomasa')  > 500) && (feature.get('Biomasa')  <= 1000));
    }
}


function BiomasadePlantacionesforestales_5rule3_eval_expression(context) {
    // Biomasa > 1000 AND Biomasa <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 1000) && (feature.get('Biomasa')  <= 2500));
    } else {
        return ((feature.get('Biomasa')  > 1000) && (feature.get('Biomasa')  <= 2500));
    }
}


function BiomasadePlantacionesforestales_5rule4_eval_expression(context) {
    // Biomasa > 2500 AND Biomasa <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 2500) && (feature.get('Biomasa')  <= 5000));
    } else {
        return ((feature.get('Biomasa')  > 2500) && (feature.get('Biomasa')  <= 5000));
    }
}


function BiomasadePlantacionesforestales_5rule5_eval_expression(context) {
    // Biomasa > 5000 AND Biomasa <= 7500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 5000) && (feature.get('Biomasa')  <= 7500));
    } else {
        return ((feature.get('Biomasa')  > 5000) && (feature.get('Biomasa')  <= 7500));
    }
}


function BiomasadePlantacionesforestales_5rule6_eval_expression(context) {
    // Biomasa > 7500 AND Biomasa <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 7500) && (feature.get('Biomasa')  <= 10000));
    } else {
        return ((feature.get('Biomasa')  > 7500) && (feature.get('Biomasa')  <= 10000));
    }
}


function BiomasadePlantacionesforestales_5rule7_eval_expression(context) {
    // Biomasa > 10000 AND Biomasa <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 10000) && (feature.get('Biomasa')  <= 20000));
    } else {
        return ((feature.get('Biomasa')  > 10000) && (feature.get('Biomasa')  <= 20000));
    }
}


function BiomasadePlantacionesforestales_5rule8_eval_expression(context) {
    // Biomasa > 20000 AND Biomasa <= 30000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 20000) && (feature.get('Biomasa')  <= 30000));
    } else {
        return ((feature.get('Biomasa')  > 20000) && (feature.get('Biomasa')  <= 30000));
    }
}


function BiomasadePlantacionesforestales_5rule9_eval_expression(context) {
    // Biomasa > 30000 AND Biomasa <= 40000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 30000) && (feature.get('Biomasa')  <= 40000));
    } else {
        return ((feature.get('Biomasa')  > 30000) && (feature.get('Biomasa')  <= 40000));
    }
}


function BiomasadePlantacionesforestales_5rule10_eval_expression(context) {
    // Biomasa > 40000 AND Biomasa <= 50000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 40000) && (feature.get('Biomasa')  <= 50000));
    } else {
        return ((feature.get('Biomasa')  > 40000) && (feature.get('Biomasa')  <= 50000));
    }
}


function BiomasadePlantacionesforestales_5rule11_eval_expression(context) {
    // Biomasa > 50000 AND Biomasa <= 60000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 50000) && (feature.get('Biomasa')  <= 60000));
    } else {
        return ((feature.get('Biomasa')  > 50000) && (feature.get('Biomasa')  <= 60000));
    }
}


function Energadebiomasaderestosdealimentospapelycartn_6rule0_eval_expression(context) {
    // Potencia12 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia12')  == 0);
    } else {
        return (feature.get('Potencia12')  == 0);
    }
}


function Energadebiomasaderestosdealimentospapelycartn_6rule1_eval_expression(context) {
    // Potencia12 > 0 AND Potencia12 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 0) && (feature.get('Potencia12')  <= 1000));
    } else {
        return ((feature.get('Potencia12')  > 0) && (feature.get('Potencia12')  <= 1000));
    }
}


function Energadebiomasaderestosdealimentospapelycartn_6rule2_eval_expression(context) {
    // Potencia12 > 1000 AND Potencia12 <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 1000) && (feature.get('Potencia12')  <= 2500));
    } else {
        return ((feature.get('Potencia12')  > 1000) && (feature.get('Potencia12')  <= 2500));
    }
}


function Energadebiomasaderestosdealimentospapelycartn_6rule3_eval_expression(context) {
    // Potencia12 > 2500 AND Potencia12 <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 2500) && (feature.get('Potencia12')  <= 5000));
    } else {
        return ((feature.get('Potencia12')  > 2500) && (feature.get('Potencia12')  <= 5000));
    }
}


function Energadebiomasaderestosdealimentospapelycartn_6rule4_eval_expression(context) {
    // Potencia12 > 5000 AND Potencia12 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 5000) && (feature.get('Potencia12')  <= 10000));
    } else {
        return ((feature.get('Potencia12')  > 5000) && (feature.get('Potencia12')  <= 10000));
    }
}


function Energadebiomasaderestosdealimentospapelycartn_6rule5_eval_expression(context) {
    // Potencia12 > 10000 AND Potencia12 <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 10000) && (feature.get('Potencia12')  <= 20000));
    } else {
        return ((feature.get('Potencia12')  > 10000) && (feature.get('Potencia12')  <= 20000));
    }
}


function Energadebiomasaderestosdealimentospapelycartn_6rule6_eval_expression(context) {
    // Potencia12 > 20000 AND Potencia12 <= 30000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 20000) && (feature.get('Potencia12')  <= 30000));
    } else {
        return ((feature.get('Potencia12')  > 20000) && (feature.get('Potencia12')  <= 30000));
    }
}


function Energadebiomasaderestosdealimentospapelycartn_6rule7_eval_expression(context) {
    // Potencia12 > 30000 AND Potencia12 <= 40000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 30000) && (feature.get('Potencia12')  <= 40000));
    } else {
        return ((feature.get('Potencia12')  > 30000) && (feature.get('Potencia12')  <= 40000));
    }
}


function Energadebiomasaderestosdealimentospapelycartn_6rule8_eval_expression(context) {
    // Potencia12 > 40000 AND Potencia12 <= 50000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 40000) && (feature.get('Potencia12')  <= 50000));
    } else {
        return ((feature.get('Potencia12')  > 40000) && (feature.get('Potencia12')  <= 50000));
    }
}


function BiomasadeRestosdealimentospapelycartn_7rule0_eval_expression(context) {
    // Disponib12 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib12')  == 0);
    } else {
        return (feature.get('Disponib12')  == 0);
    }
}


function BiomasadeRestosdealimentospapelycartn_7rule1_eval_expression(context) {
    // Disponib12 > 0 AND Disponib12 <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 0) && (feature.get('Disponib12')  <= 2500));
    } else {
        return ((feature.get('Disponib12')  > 0) && (feature.get('Disponib12')  <= 2500));
    }
}


function BiomasadeRestosdealimentospapelycartn_7rule2_eval_expression(context) {
    // Disponib12 > 2500 AND Disponib12 <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 2500) && (feature.get('Disponib12')  <= 5000));
    } else {
        return ((feature.get('Disponib12')  > 2500) && (feature.get('Disponib12')  <= 5000));
    }
}


function BiomasadeRestosdealimentospapelycartn_7rule3_eval_expression(context) {
    // Disponib12 > 5000 AND Disponib12 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 5000) && (feature.get('Disponib12')  <= 10000));
    } else {
        return ((feature.get('Disponib12')  > 5000) && (feature.get('Disponib12')  <= 10000));
    }
}


function BiomasadeRestosdealimentospapelycartn_7rule4_eval_expression(context) {
    // Disponib12 > 10000 AND Disponib12 <= 15000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 10000) && (feature.get('Disponib12')  <= 15000));
    } else {
        return ((feature.get('Disponib12')  > 10000) && (feature.get('Disponib12')  <= 15000));
    }
}


function BiomasadeRestosdealimentospapelycartn_7rule5_eval_expression(context) {
    // Disponib12 > 15000 AND Disponib12 <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 15000) && (feature.get('Disponib12')  <= 20000));
    } else {
        return ((feature.get('Disponib12')  > 15000) && (feature.get('Disponib12')  <= 20000));
    }
}


function BiomasadeRestosdealimentospapelycartn_7rule6_eval_expression(context) {
    // Disponib12 > 20000 AND Disponib12 <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 20000) && (feature.get('Disponib12')  <= 25000));
    } else {
        return ((feature.get('Disponib12')  > 20000) && (feature.get('Disponib12')  <= 25000));
    }
}


function BiomasadeRestosdealimentospapelycartn_7rule7_eval_expression(context) {
    // Disponib12 > 25000 AND Disponib12 <= 30000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 25000) && (feature.get('Disponib12')  <= 30000));
    } else {
        return ((feature.get('Disponib12')  > 25000) && (feature.get('Disponib12')  <= 30000));
    }
}


function BiomasadeRestosdealimentospapelycartn_7rule8_eval_expression(context) {
    // Disponib12 > 30000 AND Disponib12 <= 35000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 30000) && (feature.get('Disponib12')  <= 35000));
    } else {
        return ((feature.get('Disponib12')  > 30000) && (feature.get('Disponib12')  <= 35000));
    }
}


function BiomasadeRestosdealimentospapelycartn_7rule9_eval_expression(context) {
    // Disponib12 > 35000 AND Disponib12 <= 40000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 35000) && (feature.get('Disponib12')  <= 40000));
    } else {
        return ((feature.get('Disponib12')  > 35000) && (feature.get('Disponib12')  <= 40000));
    }
}


function BiomasadeRestosdealimentospapelycartn_7rule10_eval_expression(context) {
    // Disponib12 > 45000 AND Disponib12 <= 50000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 45000) && (feature.get('Disponib12')  <= 50000));
    } else {
        return ((feature.get('Disponib12')  > 45000) && (feature.get('Disponib12')  <= 50000));
    }
}


function Energiadeguanodeplantasdefaenaavcola_8rule0_eval_expression(context) {
    // Potencia64 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia64')  == 0);
    } else {
        return (feature.get('Potencia64')  == 0);
    }
}


function Energiadeguanodeplantasdefaenaavcola_8rule1_eval_expression(context) {
    // Potencia64 > 0 AND Potencia64 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia64')  > 0) && (feature.get('Potencia64')  <= 10));
    } else {
        return ((feature.get('Potencia64')  > 0) && (feature.get('Potencia64')  <= 10));
    }
}


function Energiadeguanodeplantasdefaenaavcola_8rule2_eval_expression(context) {
    // Potencia64 > 10 AND Potencia64 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia64')  > 10) && (feature.get('Potencia64')  <= 100));
    } else {
        return ((feature.get('Potencia64')  > 10) && (feature.get('Potencia64')  <= 100));
    }
}


function Energiadeguanodeplantasdefaenaavcola_8rule3_eval_expression(context) {
    // Potencia64 > 100 AND Potencia64 <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia64')  > 100) && (feature.get('Potencia64')  <= 200));
    } else {
        return ((feature.get('Potencia64')  > 100) && (feature.get('Potencia64')  <= 200));
    }
}


function Energiadeguanodeplantasdefaenaavcola_8rule4_eval_expression(context) {
    // Potencia64 > 200

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia64')  > 200);
    } else {
        return (feature.get('Potencia64')  > 200);
    }
}


function Energiadebiomasahmedadeplantasdefaenaavcola_9rule0_eval_expression(context) {
    // Potencia51 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia51')  == 0);
    } else {
        return (feature.get('Potencia51')  == 0);
    }
}


function Energiadebiomasahmedadeplantasdefaenaavcola_9rule1_eval_expression(context) {
    // Potencia51 > 0 AND Potencia51 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia51')  > 0) && (feature.get('Potencia51')  <= 1000));
    } else {
        return ((feature.get('Potencia51')  > 0) && (feature.get('Potencia51')  <= 1000));
    }
}


function Energiadebiomasahmedadeplantasdefaenaavcola_9rule2_eval_expression(context) {
    // Potencia51 > 1000 AND Potencia51 <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia51')  > 1000) && (feature.get('Potencia51')  <= 2500));
    } else {
        return ((feature.get('Potencia51')  > 1000) && (feature.get('Potencia51')  <= 2500));
    }
}


function Energiadebiomasahmedadeplantasdefaenaavcola_9rule3_eval_expression(context) {
    // Potencia51 > 2500 AND Potencia51 <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia51')  > 2500) && (feature.get('Potencia51')  <= 5000));
    } else {
        return ((feature.get('Potencia51')  > 2500) && (feature.get('Potencia51')  <= 5000));
    }
}


function Energiadebiomasahmedadeplantasdefaenaavcola_9rule4_eval_expression(context) {
    // Potencia51 > 5000 AND Potencia51 <= 7500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia51')  > 5000) && (feature.get('Potencia51')  <= 7500));
    } else {
        return ((feature.get('Potencia51')  > 5000) && (feature.get('Potencia51')  <= 7500));
    }
}


function Energiadebiomasahmedadeplantasdefaenaavcola_9rule5_eval_expression(context) {
    // Potencia51 > 7500 AND Potencia51 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia51')  > 7500) && (feature.get('Potencia51')  <= 10000));
    } else {
        return ((feature.get('Potencia51')  > 7500) && (feature.get('Potencia51')  <= 10000));
    }
}


function Energiadebiomasahmedadeplantasdefaenaavcola_9rule6_eval_expression(context) {
    // Potencia51 > 10000 AND Potencia51 <= 12500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia51')  > 10000) && (feature.get('Potencia51')  <= 12500));
    } else {
        return ((feature.get('Potencia51')  > 10000) && (feature.get('Potencia51')  <= 12500));
    }
}


function Energiadebiomasahmedadeplantasdefaenaavcola_9rule7_eval_expression(context) {
    // Potencia51 > 12500 AND Potencia51 <= 15000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia51')  > 12500) && (feature.get('Potencia51')  <= 15000));
    } else {
        return ((feature.get('Potencia51')  > 12500) && (feature.get('Potencia51')  <= 15000));
    }
}


function Energiadeefluenteslquidosdeplantasdefaena_10rule0_eval_expression(context) {
    // Potencia38 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia38')  == 0);
    } else {
        return (feature.get('Potencia38')  == 0);
    }
}


function Energiadeefluenteslquidosdeplantasdefaena_10rule1_eval_expression(context) {
    // Potencia38 >= 0 AND Potencia38 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia38')  >= 0) && (feature.get('Potencia38')  <= 10));
    } else {
        return ((feature.get('Potencia38')  >= 0) && (feature.get('Potencia38')  <= 10));
    }
}


function Energiadeefluenteslquidosdeplantasdefaena_10rule2_eval_expression(context) {
    // Potencia38 > 10 AND Potencia38 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia38')  > 10) && (feature.get('Potencia38')  <= 100));
    } else {
        return ((feature.get('Potencia38')  > 10) && (feature.get('Potencia38')  <= 100));
    }
}


function Energiadeefluenteslquidosdeplantasdefaena_10rule3_eval_expression(context) {
    // Potencia38 > 100 AND Potencia38 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia38')  > 100) && (feature.get('Potencia38')  <= 1000));
    } else {
        return ((feature.get('Potencia38')  > 100) && (feature.get('Potencia38')  <= 1000));
    }
}


function Energiadeefluenteslquidosdeplantasdefaena_10rule4_eval_expression(context) {
    // Potencia38 > 1000 AND Potencia38 <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia38')  > 1000) && (feature.get('Potencia38')  <= 2500));
    } else {
        return ((feature.get('Potencia38')  > 1000) && (feature.get('Potencia38')  <= 2500));
    }
}


function Energiadeefluenteslquidosdeplantasdefaena_10rule5_eval_expression(context) {
    // Potencia38 > 2500 AND Potencia38 <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia38')  > 2500) && (feature.get('Potencia38')  <= 5000));
    } else {
        return ((feature.get('Potencia38')  > 2500) && (feature.get('Potencia38')  <= 5000));
    }
}


function Energiadeefluenteslquidosdeplantasdefaena_10rule6_eval_expression(context) {
    // Potencia38 > 5000 AND Potencia38 <= 7500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia38')  > 5000) && (feature.get('Potencia38')  <= 7500));
    } else {
        return ((feature.get('Potencia38')  > 5000) && (feature.get('Potencia38')  <= 7500));
    }
}


function Energiadeefluenteslquidosdeplantasdefaena_10rule7_eval_expression(context) {
    // Potencia38 > 7500 AND Potencia38 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia38')  > 7500) && (feature.get('Potencia38')  <= 10000));
    } else {
        return ((feature.get('Potencia38')  > 7500) && (feature.get('Potencia38')  <= 10000));
    }
}


function EnergiaEstiercolOvinobovinoporcino_11rule0_eval_expression(context) {
    // Potencia25 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia25')  == 0);
    } else {
        return (feature.get('Potencia25')  == 0);
    }
}


function EnergiaEstiercolOvinobovinoporcino_11rule1_eval_expression(context) {
    // Potencia25 >= 0 AND Potencia25 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  >= 0) && (feature.get('Potencia25')  <= 10));
    } else {
        return ((feature.get('Potencia25')  >= 0) && (feature.get('Potencia25')  <= 10));
    }
}


function EnergiaEstiercolOvinobovinoporcino_11rule2_eval_expression(context) {
    // Potencia25 > 10 AND Potencia25 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  > 10) && (feature.get('Potencia25')  <= 100));
    } else {
        return ((feature.get('Potencia25')  > 10) && (feature.get('Potencia25')  <= 100));
    }
}


function EnergiaEstiercolOvinobovinoporcino_11rule3_eval_expression(context) {
    // Potencia25 > 100 AND Potencia25 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  > 100) && (feature.get('Potencia25')  <= 1000));
    } else {
        return ((feature.get('Potencia25')  > 100) && (feature.get('Potencia25')  <= 1000));
    }
}


function EnergiaEstiercolOvinobovinoporcino_11rule4_eval_expression(context) {
    // Potencia25 > 1000 AND Potencia25 <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  > 1000) && (feature.get('Potencia25')  <= 2500));
    } else {
        return ((feature.get('Potencia25')  > 1000) && (feature.get('Potencia25')  <= 2500));
    }
}


function EnergiaEstiercolOvinobovinoporcino_11rule5_eval_expression(context) {
    // Potencia25 > 2500 AND Potencia25 <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  > 2500) && (feature.get('Potencia25')  <= 5000));
    } else {
        return ((feature.get('Potencia25')  > 2500) && (feature.get('Potencia25')  <= 5000));
    }
}


function EnergiaEstiercolOvinobovinoporcino_11rule6_eval_expression(context) {
    // Potencia25 > 5000 AND Potencia25 <= 7500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  > 5000) && (feature.get('Potencia25')  <= 7500));
    } else {
        return ((feature.get('Potencia25')  > 5000) && (feature.get('Potencia25')  <= 7500));
    }
}


function EnergiaEstiercolOvinobovinoporcino_11rule7_eval_expression(context) {
    // Potencia25 > 7500 AND Potencia25 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  > 7500) && (feature.get('Potencia25')  <= 10000));
    } else {
        return ((feature.get('Potencia25')  > 7500) && (feature.get('Potencia25')  <= 10000));
    }
}


function EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12rule0_eval_expression(context) {
    // Potencia12 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia12')  == 0);
    } else {
        return (feature.get('Potencia12')  == 0);
    }
}


function EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12rule1_eval_expression(context) {
    // Potencia12 > 0 AND Potencia12 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 0) && (feature.get('Potencia12')  <= 10));
    } else {
        return ((feature.get('Potencia12')  > 0) && (feature.get('Potencia12')  <= 10));
    }
}


function EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12rule2_eval_expression(context) {
    // Potencia12 > 10 AND Potencia12 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 10) && (feature.get('Potencia12')  <= 100));
    } else {
        return ((feature.get('Potencia12')  > 10) && (feature.get('Potencia12')  <= 100));
    }
}


function EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12rule3_eval_expression(context) {
    // Potencia12 > 100 AND Potencia12 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 100) && (feature.get('Potencia12')  <= 1000));
    } else {
        return ((feature.get('Potencia12')  > 100) && (feature.get('Potencia12')  <= 1000));
    }
}


function EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12rule4_eval_expression(context) {
    // Potencia12 > 1000 AND Potencia12 <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 1000) && (feature.get('Potencia12')  <= 2500));
    } else {
        return ((feature.get('Potencia12')  > 1000) && (feature.get('Potencia12')  <= 2500));
    }
}


function EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12rule5_eval_expression(context) {
    // Potencia12 > 2500 AND Potencia12 <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 2500) && (feature.get('Potencia12')  <= 5000));
    } else {
        return ((feature.get('Potencia12')  > 2500) && (feature.get('Potencia12')  <= 5000));
    }
}


function EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12rule6_eval_expression(context) {
    // Potencia12 > 5000 AND Potencia12 <= 7500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 5000) && (feature.get('Potencia12')  <= 7500));
    } else {
        return ((feature.get('Potencia12')  > 5000) && (feature.get('Potencia12')  <= 7500));
    }
}


function EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12rule7_eval_expression(context) {
    // Potencia12 > 7500 AND Potencia12 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia12')  > 7500) && (feature.get('Potencia12')  <= 10000));
    } else {
        return ((feature.get('Potencia12')  > 7500) && (feature.get('Potencia12')  <= 10000));
    }
}


function Guanodeplantasdefaenaavcola_13rule0_eval_expression(context) {
    // Disponib64 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib64')  == 0);
    } else {
        return (feature.get('Disponib64')  == 0);
    }
}


function Guanodeplantasdefaenaavcola_13rule1_eval_expression(context) {
    // Disponib64 >= 0 AND Disponib64 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib64')  >= 0) && (feature.get('Disponib64')  <= 10));
    } else {
        return ((feature.get('Disponib64')  >= 0) && (feature.get('Disponib64')  <= 10));
    }
}


function Guanodeplantasdefaenaavcola_13rule2_eval_expression(context) {
    // Disponib64 > 10 AND Disponib64 <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib64')  > 10) && (feature.get('Disponib64')  <= 20));
    } else {
        return ((feature.get('Disponib64')  > 10) && (feature.get('Disponib64')  <= 20));
    }
}


function Guanodeplantasdefaenaavcola_13rule3_eval_expression(context) {
    // Disponib64 > 20 AND Disponib64 <= 30

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib64')  > 20) && (feature.get('Disponib64')  <= 30));
    } else {
        return ((feature.get('Disponib64')  > 20) && (feature.get('Disponib64')  <= 30));
    }
}


function Guanodeplantasdefaenaavcola_13rule4_eval_expression(context) {
    // Disponib64 > 30 AND Disponib64 <= 40

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib64')  > 30) && (feature.get('Disponib64')  <= 40));
    } else {
        return ((feature.get('Disponib64')  > 30) && (feature.get('Disponib64')  <= 40));
    }
}


function Biomasahmedadeplantasdefaenaavcola_14rule0_eval_expression(context) {
    // Disponib38 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib38')  == 0);
    } else {
        return (feature.get('Disponib38')  == 0);
    }
}


function Biomasahmedadeplantasdefaenaavcola_14rule1_eval_expression(context) {
    // Disponib51 > 0 AND Disponib51 <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib51')  > 0) && (feature.get('Disponib51')  <= 250));
    } else {
        return ((feature.get('Disponib51')  > 0) && (feature.get('Disponib51')  <= 250));
    }
}


function Biomasahmedadeplantasdefaenaavcola_14rule2_eval_expression(context) {
    // Disponib51 > 250 AND Disponib51 <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib51')  > 250) && (feature.get('Disponib51')  <= 500));
    } else {
        return ((feature.get('Disponib51')  > 250) && (feature.get('Disponib51')  <= 500));
    }
}


function Biomasahmedadeplantasdefaenaavcola_14rule3_eval_expression(context) {
    // Disponib51 > 500 AND Disponib51 <= 750

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib51')  > 500) && (feature.get('Disponib51')  <= 750));
    } else {
        return ((feature.get('Disponib51')  > 500) && (feature.get('Disponib51')  <= 750));
    }
}


function Biomasahmedadeplantasdefaenaavcola_14rule4_eval_expression(context) {
    // Disponib51 > 750 AND Disponib51 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib51')  > 750) && (feature.get('Disponib51')  <= 1000));
    } else {
        return ((feature.get('Disponib51')  > 750) && (feature.get('Disponib51')  <= 1000));
    }
}


function Biomasahmedadeplantasdefaenaavcola_14rule5_eval_expression(context) {
    // Disponib51 > 1000 AND Disponib51 <= 1250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib51')  > 1000) && (feature.get('Disponib51')  <= 1250));
    } else {
        return ((feature.get('Disponib51')  > 1000) && (feature.get('Disponib51')  <= 1250));
    }
}


function Biomasahmedadeplantasdefaenaavcola_14rule6_eval_expression(context) {
    // Disponib51 > 1250 AND Disponib51 <= 1500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib51')  > 1250) && (feature.get('Disponib51')  <= 1500));
    } else {
        return ((feature.get('Disponib51')  > 1250) && (feature.get('Disponib51')  <= 1500));
    }
}


function Biomasahmedadeplantasdefaenaavcola_14rule7_eval_expression(context) {
    // Disponib51 > 1500 AND Disponib51 <= 1750

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib51')  > 1500) && (feature.get('Disponib51')  <= 1750));
    } else {
        return ((feature.get('Disponib51')  > 1500) && (feature.get('Disponib51')  <= 1750));
    }
}


function Biomasahmedadeplantasdefaenaavcola_14rule8_eval_expression(context) {
    // Disponib51 > 1750 AND Disponib51 <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib51')  > 1750) && (feature.get('Disponib51')  <= 2000));
    } else {
        return ((feature.get('Disponib51')  > 1750) && (feature.get('Disponib51')  <= 2000));
    }
}


function Efluenteslquidosdeplantasdefaenaavcola_15rule0_eval_expression(context) {
    // Disponib38 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib38')  == 0);
    } else {
        return (feature.get('Disponib38')  == 0);
    }
}


function Efluenteslquidosdeplantasdefaenaavcola_15rule1_eval_expression(context) {
    // Disponib38 > 0 AND Disponib38 <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib38')  > 0) && (feature.get('Disponib38')  <= 50));
    } else {
        return ((feature.get('Disponib38')  > 0) && (feature.get('Disponib38')  <= 50));
    }
}


function Efluenteslquidosdeplantasdefaenaavcola_15rule2_eval_expression(context) {
    // Disponib38 > 50 AND Disponib38 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib38')  > 50) && (feature.get('Disponib38')  <= 100));
    } else {
        return ((feature.get('Disponib38')  > 50) && (feature.get('Disponib38')  <= 100));
    }
}


function Efluenteslquidosdeplantasdefaenaavcola_15rule3_eval_expression(context) {
    // Disponib38 > 100 AND Disponib38 <= 150

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib38')  > 100) && (feature.get('Disponib38')  <= 150));
    } else {
        return ((feature.get('Disponib38')  > 100) && (feature.get('Disponib38')  <= 150));
    }
}


function EstircolOvinobovinoporcino_16rule0_eval_expression(context) {
    // Disponib25 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib25')  == 0);
    } else {
        return (feature.get('Disponib25')  == 0);
    }
}


function EstircolOvinobovinoporcino_16rule1_eval_expression(context) {
    // Disponib25 > 0 AND Disponib25 <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 0) && (feature.get('Disponib25')  <= 200));
    } else {
        return ((feature.get('Disponib25')  > 0) && (feature.get('Disponib25')  <= 200));
    }
}


function EstircolOvinobovinoporcino_16rule2_eval_expression(context) {
    // Disponib25 > 200 AND Disponib25 <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 200) && (feature.get('Disponib25')  <= 400));
    } else {
        return ((feature.get('Disponib25')  > 200) && (feature.get('Disponib25')  <= 400));
    }
}


function EstircolOvinobovinoporcino_16rule3_eval_expression(context) {
    // Disponib25 > 400 AND Disponib25 <= 600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 400) && (feature.get('Disponib25')  <= 600));
    } else {
        return ((feature.get('Disponib25')  > 400) && (feature.get('Disponib25')  <= 600));
    }
}


function EstircolOvinobovinoporcino_16rule4_eval_expression(context) {
    // Disponib25 > 600 AND Disponib25 <= 800

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 600) && (feature.get('Disponib25')  <= 800));
    } else {
        return ((feature.get('Disponib25')  > 600) && (feature.get('Disponib25')  <= 800));
    }
}


function EstircolOvinobovinoporcino_16rule5_eval_expression(context) {
    // Disponib25 > 800 AND Disponib25 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 800) && (feature.get('Disponib25')  <= 1000));
    } else {
        return ((feature.get('Disponib25')  > 800) && (feature.get('Disponib25')  <= 1000));
    }
}


function EstircolOvinobovinoporcino_16rule6_eval_expression(context) {
    // Disponib25 > 1000 AND Disponib25 <= 1200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 1000) && (feature.get('Disponib25')  <= 1200));
    } else {
        return ((feature.get('Disponib25')  > 1000) && (feature.get('Disponib25')  <= 1200));
    }
}


function EstircolOvinobovinoporcino_16rule7_eval_expression(context) {
    // Disponib25 > 1200 AND Disponib25 <= 1400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 1200) && (feature.get('Disponib25')  <= 1400));
    } else {
        return ((feature.get('Disponib25')  > 1200) && (feature.get('Disponib25')  <= 1400));
    }
}


function EstircolOvinobovinoporcino_16rule8_eval_expression(context) {
    // Disponib25 > 1400 AND Disponib25 <= 1600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 1400) && (feature.get('Disponib25')  <= 1600));
    } else {
        return ((feature.get('Disponib25')  > 1400) && (feature.get('Disponib25')  <= 1600));
    }
}


function BiomasalquidaOvinobovinoporcino_17rule0_eval_expression(context) {
    // Disponib12 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib12')  == 0);
    } else {
        return (feature.get('Disponib12')  == 0);
    }
}


function BiomasalquidaOvinobovinoporcino_17rule1_eval_expression(context) {
    // Disponib12 > 0 AND Disponib12 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 0) && (feature.get('Disponib12')  <= 100));
    } else {
        return ((feature.get('Disponib12')  > 0) && (feature.get('Disponib12')  <= 100));
    }
}


function BiomasalquidaOvinobovinoporcino_17rule2_eval_expression(context) {
    // Disponib12 > 100 AND Disponib12 <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 100) && (feature.get('Disponib12')  <= 200));
    } else {
        return ((feature.get('Disponib12')  > 100) && (feature.get('Disponib12')  <= 200));
    }
}


function BiomasalquidaOvinobovinoporcino_17rule3_eval_expression(context) {
    // Disponib12 > 200 AND Disponib12 <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 200) && (feature.get('Disponib12')  <= 300));
    } else {
        return ((feature.get('Disponib12')  > 200) && (feature.get('Disponib12')  <= 300));
    }
}


function BiomasalquidaOvinobovinoporcino_17rule4_eval_expression(context) {
    // Disponib12 > 300 AND Disponib12 <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 300) && (feature.get('Disponib12')  <= 400));
    } else {
        return ((feature.get('Disponib12')  > 300) && (feature.get('Disponib12')  <= 400));
    }
}


function BiomasalquidaOvinobovinoporcino_17rule5_eval_expression(context) {
    // Disponib12 > 400 AND Disponib12 <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 400) && (feature.get('Disponib12')  <= 500));
    } else {
        return ((feature.get('Disponib12')  > 400) && (feature.get('Disponib12')  <= 500));
    }
}


function BiomasalquidaOvinobovinoporcino_17rule6_eval_expression(context) {
    // Disponib12 > 500 AND Disponib12 <= 600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 500) && (feature.get('Disponib12')  <= 600));
    } else {
        return ((feature.get('Disponib12')  > 500) && (feature.get('Disponib12')  <= 600));
    }
}


function BiomasalquidaOvinobovinoporcino_17rule7_eval_expression(context) {
    // Disponib12 > 600 AND Disponib12 <= 700

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 600) && (feature.get('Disponib12')  <= 700));
    } else {
        return ((feature.get('Disponib12')  > 600) && (feature.get('Disponib12')  <= 700));
    }
}


function BiomasalquidaOvinobovinoporcino_17rule8_eval_expression(context) {
    // Disponib12 > 700 AND Disponib12 <= 800

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 700) && (feature.get('Disponib12')  <= 800));
    } else {
        return ((feature.get('Disponib12')  > 700) && (feature.get('Disponib12')  <= 800));
    }
}


function BiomasalquidaOvinobovinoporcino_17rule9_eval_expression(context) {
    // Disponib12 > 800 AND Disponib12 <= 900

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 800) && (feature.get('Disponib12')  <= 900));
    } else {
        return ((feature.get('Disponib12')  > 800) && (feature.get('Disponib12')  <= 900));
    }
}


function BiomasalquidaOvinobovinoporcino_17rule10_eval_expression(context) {
    // Disponib12 > 900 AND Disponib12 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib12')  > 900) && (feature.get('Disponib12')  <= 1000));
    } else {
        return ((feature.get('Disponib12')  > 900) && (feature.get('Disponib12')  <= 1000));
    }
}


function EnergiaOrujoAceituna_18rule0_eval_expression(context) {
    // Potencia24 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia24')  == 0);
    } else {
        return (feature.get('Potencia24')  == 0);
    }
}


function EnergiaOrujoAceituna_18rule1_eval_expression(context) {
    // Potencia24 > 0 AND Potencia24 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia24')  > 0) && (feature.get('Potencia24')  <= 10));
    } else {
        return ((feature.get('Potencia24')  > 0) && (feature.get('Potencia24')  <= 10));
    }
}


function EnergiaOrujoAceituna_18rule2_eval_expression(context) {
    // Potencia24 > 10 AND Potencia24 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia24')  > 10) && (feature.get('Potencia24')  <= 100));
    } else {
        return ((feature.get('Potencia24')  > 10) && (feature.get('Potencia24')  <= 100));
    }
}


function EnergiaOrujoAceituna_18rule3_eval_expression(context) {
    // Potencia24 > 100 AND Potencia24 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia24')  > 100) && (feature.get('Potencia24')  <= 1000));
    } else {
        return ((feature.get('Potencia24')  > 100) && (feature.get('Potencia24')  <= 1000));
    }
}


function EnergiaOrujoAceituna_18rule4_eval_expression(context) {
    // Potencia24 > 1000 AND Potencia24 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia24')  > 1000) && (feature.get('Potencia24')  <= 10000));
    } else {
        return ((feature.get('Potencia24')  > 1000) && (feature.get('Potencia24')  <= 10000));
    }
}


function EnergiaOrujoAceituna_18rule5_eval_expression(context) {
    // Potencia24 > 10000 AND Potencia24 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia24')  > 10000) && (feature.get('Potencia24')  <= 100000));
    } else {
        return ((feature.get('Potencia24')  > 10000) && (feature.get('Potencia24')  <= 100000));
    }
}


function EnergiaOrujoUva_19rule0_eval_expression(context) {
    // Potencia18 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia18')  == 0);
    } else {
        return (feature.get('Potencia18')  == 0);
    }
}


function EnergiaOrujoUva_19rule1_eval_expression(context) {
    // Potencia18 > 0 AND Potencia18 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia18')  > 0) && (feature.get('Potencia18')  <= 10));
    } else {
        return ((feature.get('Potencia18')  > 0) && (feature.get('Potencia18')  <= 10));
    }
}


function EnergiaOrujoUva_19rule2_eval_expression(context) {
    // Potencia18 > 10 AND Potencia18 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia18')  > 10) && (feature.get('Potencia18')  <= 100));
    } else {
        return ((feature.get('Potencia18')  > 10) && (feature.get('Potencia18')  <= 100));
    }
}


function EnergiaOrujoUva_19rule3_eval_expression(context) {
    // Potencia18 > 100 AND Potencia18 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia18')  > 100) && (feature.get('Potencia18')  <= 1000));
    } else {
        return ((feature.get('Potencia18')  > 100) && (feature.get('Potencia18')  <= 1000));
    }
}


function EnergiaOrujoUva_19rule4_eval_expression(context) {
    // Potencia18 > 1000 AND Potencia18 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia18')  > 1000) && (feature.get('Potencia18')  <= 10000));
    } else {
        return ((feature.get('Potencia18')  > 1000) && (feature.get('Potencia18')  <= 10000));
    }
}


function EnergiaOrujoUva_19rule5_eval_expression(context) {
    // Potencia18 > 10000 AND Potencia18 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia18')  > 10000) && (feature.get('Potencia18')  <= 100000));
    } else {
        return ((feature.get('Potencia18')  > 10000) && (feature.get('Potencia18')  <= 100000));
    }
}


function EnergiaConservasTomate_20rule0_eval_expression(context) {
    // Potencia13 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia13')  == 0);
    } else {
        return (feature.get('Potencia13')  == 0);
    }
}


function EnergiaConservasTomate_20rule1_eval_expression(context) {
    // Potencia13 > 0 AND Potencia13 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia13')  > 0) && (feature.get('Potencia13')  <= 10));
    } else {
        return ((feature.get('Potencia13')  > 0) && (feature.get('Potencia13')  <= 10));
    }
}


function EnergiaConservasTomate_20rule2_eval_expression(context) {
    // Potencia13 > 10 AND Potencia13 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia13')  > 10) && (feature.get('Potencia13')  <= 100));
    } else {
        return ((feature.get('Potencia13')  > 10) && (feature.get('Potencia13')  <= 100));
    }
}


function EnergiaConservasTomate_20rule3_eval_expression(context) {
    // Potencia13 > 100 AND Potencia13 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia13')  > 100) && (feature.get('Potencia13')  <= 1000));
    } else {
        return ((feature.get('Potencia13')  > 100) && (feature.get('Potencia13')  <= 1000));
    }
}


function EnergiaConservasTomate_20rule4_eval_expression(context) {
    // Potencia13 > 1000 AND Potencia13 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia13')  > 1000) && (feature.get('Potencia13')  <= 10000));
    } else {
        return ((feature.get('Potencia13')  > 1000) && (feature.get('Potencia13')  <= 10000));
    }
}


function EnergiaConservasTomate_20rule5_eval_expression(context) {
    // Potencia13 > 10000 AND Potencia13 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia13')  > 10000) && (feature.get('Potencia13')  <= 100000));
    } else {
        return ((feature.get('Potencia13')  > 10000) && (feature.get('Potencia13')  <= 100000));
    }
}


function EnergiaConservasPera_21rule0_eval_expression(context) {
    // Potencia_6 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia_6')  == 0);
    } else {
        return (feature.get('Potencia_6')  == 0);
    }
}


function EnergiaConservasPera_21rule1_eval_expression(context) {
    // Potencia_6 > 0 AND Potencia_6 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_6')  > 0) && (feature.get('Potencia_6')  <= 10));
    } else {
        return ((feature.get('Potencia_6')  > 0) && (feature.get('Potencia_6')  <= 10));
    }
}


function EnergiaConservasPera_21rule2_eval_expression(context) {
    // Potencia_6 > 10 AND Potencia_6 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_6')  > 10) && (feature.get('Potencia_6')  <= 100));
    } else {
        return ((feature.get('Potencia_6')  > 10) && (feature.get('Potencia_6')  <= 100));
    }
}


function EnergiaConservasPera_21rule3_eval_expression(context) {
    // Potencia_6 > 100 AND Potencia_6 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_6')  > 100) && (feature.get('Potencia_6')  <= 1000));
    } else {
        return ((feature.get('Potencia_6')  > 100) && (feature.get('Potencia_6')  <= 1000));
    }
}


function EnergiaConservasPera_21rule4_eval_expression(context) {
    // Potencia_6 > 1000 AND Potencia_6 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_6')  > 1000) && (feature.get('Potencia_6')  <= 10000));
    } else {
        return ((feature.get('Potencia_6')  > 1000) && (feature.get('Potencia_6')  <= 10000));
    }
}


function EnergiaConservasPera_21rule5_eval_expression(context) {
    // Potencia_6 > 10000 AND Potencia_6 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_6')  > 10000) && (feature.get('Potencia_6')  <= 100000));
    } else {
        return ((feature.get('Potencia_6')  > 10000) && (feature.get('Potencia_6')  <= 100000));
    }
}


function EnergiaConservasDurazno_22rule0_eval_expression(context) {
    // Potencia_4 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia_4')  == 0);
    } else {
        return (feature.get('Potencia_4')  == 0);
    }
}


function EnergiaConservasDurazno_22rule1_eval_expression(context) {
    // Potencia_4 > 0 AND Potencia_4 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_4')  > 0) && (feature.get('Potencia_4')  <= 10));
    } else {
        return ((feature.get('Potencia_4')  > 0) && (feature.get('Potencia_4')  <= 10));
    }
}


function EnergiaConservasDurazno_22rule2_eval_expression(context) {
    // Potencia_4 > 10 AND Potencia_4 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_4')  > 10) && (feature.get('Potencia_4')  <= 100));
    } else {
        return ((feature.get('Potencia_4')  > 10) && (feature.get('Potencia_4')  <= 100));
    }
}


function EnergiaConservasDurazno_22rule3_eval_expression(context) {
    // Potencia_4 > 100 AND Potencia_4 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_4')  > 100) && (feature.get('Potencia_4')  <= 1000));
    } else {
        return ((feature.get('Potencia_4')  > 100) && (feature.get('Potencia_4')  <= 1000));
    }
}


function EnergiaConservasDurazno_22rule4_eval_expression(context) {
    // Potencia_4 > 1000 AND Potencia_4 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_4')  > 1000) && (feature.get('Potencia_4')  <= 10000));
    } else {
        return ((feature.get('Potencia_4')  > 1000) && (feature.get('Potencia_4')  <= 10000));
    }
}


function EnergiaConservasDurazno_22rule5_eval_expression(context) {
    // Potencia_4 > 10000 AND Potencia_4 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_4')  > 10000) && (feature.get('Potencia_4')  <= 100000));
    } else {
        return ((feature.get('Potencia_4')  > 10000) && (feature.get('Potencia_4')  <= 100000));
    }
}


function OrujoAceituna_23rule0_eval_expression(context) {
    // Disponib24 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib24')  == 0);
    } else {
        return (feature.get('Disponib24')  == 0);
    }
}


function OrujoAceituna_23rule1_eval_expression(context) {
    // Disponib24 > 0 AND Disponib24 <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib24')  > 0) && (feature.get('Disponib24')  <= 25));
    } else {
        return ((feature.get('Disponib24')  > 0) && (feature.get('Disponib24')  <= 25));
    }
}


function OrujoAceituna_23rule2_eval_expression(context) {
    // Disponib24 > 25 AND Disponib24 <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib24')  > 25) && (feature.get('Disponib24')  <= 50));
    } else {
        return ((feature.get('Disponib24')  > 25) && (feature.get('Disponib24')  <= 50));
    }
}


function OrujoAceituna_23rule3_eval_expression(context) {
    // Disponib24 > 50 AND Disponib24 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib24')  > 50) && (feature.get('Disponib24')  <= 100));
    } else {
        return ((feature.get('Disponib24')  > 50) && (feature.get('Disponib24')  <= 100));
    }
}


function OrujoAceituna_23rule4_eval_expression(context) {
    // Disponib24 > 100 AND Disponib24 <= 150

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib24')  > 100) && (feature.get('Disponib24')  <= 150));
    } else {
        return ((feature.get('Disponib24')  > 100) && (feature.get('Disponib24')  <= 150));
    }
}


function OrujoAceituna_23rule5_eval_expression(context) {
    // Disponib24 > 150 AND Disponib24 <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib24')  > 150) && (feature.get('Disponib24')  <= 200));
    } else {
        return ((feature.get('Disponib24')  > 150) && (feature.get('Disponib24')  <= 200));
    }
}


function OrujoAceituna_23rule6_eval_expression(context) {
    // Disponib24 > 200 AND Disponib24 <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib24')  > 200) && (feature.get('Disponib24')  <= 250));
    } else {
        return ((feature.get('Disponib24')  > 200) && (feature.get('Disponib24')  <= 250));
    }
}


function OrujoAceituna_23rule7_eval_expression(context) {
    // Disponib24 > 250 AND Disponib24 <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib24')  > 250) && (feature.get('Disponib24')  <= 300));
    } else {
        return ((feature.get('Disponib24')  > 250) && (feature.get('Disponib24')  <= 300));
    }
}


function OrujoAceituna_23rule8_eval_expression(context) {
    // Disponib24 > 300 AND Disponib24 <= 350

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib24')  > 300) && (feature.get('Disponib24')  <= 350));
    } else {
        return ((feature.get('Disponib24')  > 300) && (feature.get('Disponib24')  <= 350));
    }
}


function OrujoUva_24rule0_eval_expression(context) {
    // Disponib18 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib18')  == 0);
    } else {
        return (feature.get('Disponib18')  == 0);
    }
}


function OrujoUva_24rule1_eval_expression(context) {
    // Disponib18 > 0.1 AND Disponib18 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib18')  > 0.1) && (feature.get('Disponib18')  <= 100));
    } else {
        return ((feature.get('Disponib18')  > 0.1) && (feature.get('Disponib18')  <= 100));
    }
}


function OrujoUva_24rule2_eval_expression(context) {
    // Disponib18 > 100 AND Disponib18 <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib18')  > 100) && (feature.get('Disponib18')  <= 200));
    } else {
        return ((feature.get('Disponib18')  > 100) && (feature.get('Disponib18')  <= 200));
    }
}


function OrujoUva_24rule3_eval_expression(context) {
    // Disponib18 > 200 AND Disponib18 <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib18')  > 200) && (feature.get('Disponib18')  <= 300));
    } else {
        return ((feature.get('Disponib18')  > 200) && (feature.get('Disponib18')  <= 300));
    }
}


function OrujoUva_24rule4_eval_expression(context) {
    // Disponib18 > 300 AND Disponib18 <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib18')  > 300) && (feature.get('Disponib18')  <= 400));
    } else {
        return ((feature.get('Disponib18')  > 300) && (feature.get('Disponib18')  <= 400));
    }
}


function OrujoUva_24rule5_eval_expression(context) {
    // Disponib_18 > 400 AND Disponib_18 <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_18')  > 400) && (feature.get('Disponib_18')  <= 500));
    } else {
        return ((feature.get('Disponib_18')  > 400) && (feature.get('Disponib_18')  <= 500));
    }
}


function OrujoUva_24rule6_eval_expression(context) {
    // Disponib18 > 500 AND Disponib18 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib18')  > 500) && (feature.get('Disponib18')  <= 1000));
    } else {
        return ((feature.get('Disponib18')  > 500) && (feature.get('Disponib18')  <= 1000));
    }
}


function OrujoUva_24rule7_eval_expression(context) {
    // Disponib18 > 1000 AND Disponib18 <= 1500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib18')  > 1000) && (feature.get('Disponib18')  <= 1500));
    } else {
        return ((feature.get('Disponib18')  > 1000) && (feature.get('Disponib18')  <= 1500));
    }
}


function OrujoUva_24rule8_eval_expression(context) {
    // Disponib18 > 1500 AND Disponib18 <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib18')  > 1500) && (feature.get('Disponib18')  <= 2000));
    } else {
        return ((feature.get('Disponib18')  > 1500) && (feature.get('Disponib18')  <= 2000));
    }
}


function OrujoUva_24rule9_eval_expression(context) {
    // Disponib18 > 2000 AND Disponib18 <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib18')  > 2000) && (feature.get('Disponib18')  <= 2500));
    } else {
        return ((feature.get('Disponib18')  > 2000) && (feature.get('Disponib18')  <= 2500));
    }
}


function OrujoUva_24rule10_eval_expression(context) {
    // Disponib18 > 2500 AND Disponib18 <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib18')  > 2500) && (feature.get('Disponib18')  <= 3000));
    } else {
        return ((feature.get('Disponib18')  > 2500) && (feature.get('Disponib18')  <= 3000));
    }
}


function OrujoUva_24rule11_eval_expression(context) {
    // Disponib18 > 3000 AND Disponib18 <= 3500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib18')  > 3000) && (feature.get('Disponib18')  <= 3500));
    } else {
        return ((feature.get('Disponib18')  > 3000) && (feature.get('Disponib18')  <= 3500));
    }
}


function OrujoUva_24rule12_eval_expression(context) {
    // Disponib18 > 3500 AND Disponib18 <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib18')  > 3500) && (feature.get('Disponib18')  <= 4000));
    } else {
        return ((feature.get('Disponib18')  > 3500) && (feature.get('Disponib18')  <= 4000));
    }
}


function ConservasTomate_25rule0_eval_expression(context) {
    // Disponib13 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib13')  == 0);
    } else {
        return (feature.get('Disponib13')  == 0);
    }
}


function ConservasTomate_25rule1_eval_expression(context) {
    // Disponib13 >= 0 AND Disponib13 <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib13')  >= 0) && (feature.get('Disponib13')  <= 5));
    } else {
        return ((feature.get('Disponib13')  >= 0) && (feature.get('Disponib13')  <= 5));
    }
}


function ConservasTomate_25rule2_eval_expression(context) {
    // Disponib13 > 5 AND Disponib13 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib13')  > 5) && (feature.get('Disponib13')  <= 10));
    } else {
        return ((feature.get('Disponib13')  > 5) && (feature.get('Disponib13')  <= 10));
    }
}


function ConservasTomate_25rule3_eval_expression(context) {
    // Disponib13 > 10 AND Disponib13 <= 15

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib13')  > 10) && (feature.get('Disponib13')  <= 15));
    } else {
        return ((feature.get('Disponib13')  > 10) && (feature.get('Disponib13')  <= 15));
    }
}


function ConservasTomate_25rule4_eval_expression(context) {
    // Disponib13 > 15 AND Disponib13 <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib13')  > 15) && (feature.get('Disponib13')  <= 20));
    } else {
        return ((feature.get('Disponib13')  > 15) && (feature.get('Disponib13')  <= 20));
    }
}


function ConservasTomate_25rule5_eval_expression(context) {
    // Disponib13 > 20 AND Disponib13 <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib13')  > 20) && (feature.get('Disponib13')  <= 25));
    } else {
        return ((feature.get('Disponib13')  > 20) && (feature.get('Disponib13')  <= 25));
    }
}


function ConservasTomate_25rule6_eval_expression(context) {
    // Disponib13 > 25 AND Disponib13 <= 30

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib13')  > 25) && (feature.get('Disponib13')  <= 30));
    } else {
        return ((feature.get('Disponib13')  > 25) && (feature.get('Disponib13')  <= 30));
    }
}


function ConservasTomate_25rule7_eval_expression(context) {
    // Disponib13 > 30 AND Disponib13 <= 35

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib13')  > 30) && (feature.get('Disponib13')  <= 35));
    } else {
        return ((feature.get('Disponib13')  > 30) && (feature.get('Disponib13')  <= 35));
    }
}


function ConservasTomate_25rule8_eval_expression(context) {
    // Disponib13 > 35 AND Disponib13 <= 40

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib13')  > 35) && (feature.get('Disponib13')  <= 40));
    } else {
        return ((feature.get('Disponib13')  > 35) && (feature.get('Disponib13')  <= 40));
    }
}


function ConservasTomate_25rule9_eval_expression(context) {
    // Disponib13 > 40 AND Disponib13 <= 45

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib13')  > 40) && (feature.get('Disponib13')  <= 45));
    } else {
        return ((feature.get('Disponib13')  > 40) && (feature.get('Disponib13')  <= 45));
    }
}


function ConservasPera_26rule0_eval_expression(context) {
    // Disponib_6 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib_6')  == 0);
    } else {
        return (feature.get('Disponib_6')  == 0);
    }
}


function ConservasPera_26rule1_eval_expression(context) {
    // Disponib_6 > 0 AND Disponib_6 <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_6')  > 0) && (feature.get('Disponib_6')  <= 2));
    } else {
        return ((feature.get('Disponib_6')  > 0) && (feature.get('Disponib_6')  <= 2));
    }
}


function ConservasPera_26rule2_eval_expression(context) {
    // Disponib_6 > 2 AND Disponib_6 <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_6')  > 2) && (feature.get('Disponib_6')  <= 4));
    } else {
        return ((feature.get('Disponib_6')  > 2) && (feature.get('Disponib_6')  <= 4));
    }
}


function ConservasPera_26rule3_eval_expression(context) {
    // Disponib_6 > 4 AND Disponib_6 <= 6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_6')  > 4) && (feature.get('Disponib_6')  <= 6));
    } else {
        return ((feature.get('Disponib_6')  > 4) && (feature.get('Disponib_6')  <= 6));
    }
}


function ConservasPera_26rule4_eval_expression(context) {
    // Disponib_6 > 6 AND Disponib_4 <= 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_6')  > 6) && (feature.get('Disponib_4')  <= 8));
    } else {
        return ((feature.get('Disponib_6')  > 6) && (feature.get('Disponib_4')  <= 8));
    }
}


function ConservasPera_26rule5_eval_expression(context) {
    // Disponib_6 > 8 AND Disponib_6 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_6')  > 8) && (feature.get('Disponib_6')  <= 10));
    } else {
        return ((feature.get('Disponib_6')  > 8) && (feature.get('Disponib_6')  <= 10));
    }
}


function ConservasPera_26rule6_eval_expression(context) {
    // Disponib_6 > 10 AND Disponib_6 <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_6')  > 10) && (feature.get('Disponib_6')  <= 50));
    } else {
        return ((feature.get('Disponib_6')  > 10) && (feature.get('Disponib_6')  <= 50));
    }
}


function ConservasPera_26rule7_eval_expression(context) {
    // Disponib_6 > 50 AND Disponib_6 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_6')  > 50) && (feature.get('Disponib_6')  <= 100));
    } else {
        return ((feature.get('Disponib_6')  > 50) && (feature.get('Disponib_6')  <= 100));
    }
}


function ConservasPera_26rule8_eval_expression(context) {
    // Disponib_6 > 100 AND Disponib_6 <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_6')  > 100) && (feature.get('Disponib_6')  <= 200));
    } else {
        return ((feature.get('Disponib_6')  > 100) && (feature.get('Disponib_6')  <= 200));
    }
}


function ConservasPera_26rule9_eval_expression(context) {
    // Disponib_6 > 200 AND Disponib_6 <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_6')  > 200) && (feature.get('Disponib_6')  <= 300));
    } else {
        return ((feature.get('Disponib_6')  > 200) && (feature.get('Disponib_6')  <= 300));
    }
}


function ConservasPera_26rule10_eval_expression(context) {
    // Disponib_6 > 300 AND Disponib_6 <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_6')  > 300) && (feature.get('Disponib_6')  <= 400));
    } else {
        return ((feature.get('Disponib_6')  > 300) && (feature.get('Disponib_6')  <= 400));
    }
}


function ConservasDurazno_27rule0_eval_expression(context) {
    // Disponib_4 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib_4')  == 0.0);
    } else {
        return (feature.get('Disponib_4')  == 0.0);
    }
}


function ConservasDurazno_27rule1_eval_expression(context) {
    // Disponib_4 > 0 AND Disponib_4 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 0) && (feature.get('Disponib_4')  <= 10));
    } else {
        return ((feature.get('Disponib_4')  > 0) && (feature.get('Disponib_4')  <= 10));
    }
}


function ConservasDurazno_27rule2_eval_expression(context) {
    // Disponib_4 > 10 AND Disponib_4 <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 10) && (feature.get('Disponib_4')  <= 50));
    } else {
        return ((feature.get('Disponib_4')  > 10) && (feature.get('Disponib_4')  <= 50));
    }
}


function ConservasDurazno_27rule3_eval_expression(context) {
    // Disponib_4 > 50 AND Disponib_4 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 50) && (feature.get('Disponib_4')  <= 100));
    } else {
        return ((feature.get('Disponib_4')  > 50) && (feature.get('Disponib_4')  <= 100));
    }
}


function ConservasDurazno_27rule4_eval_expression(context) {
    // Disponib_4 > 100 AND Disponib_4 <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 100) && (feature.get('Disponib_4')  <= 200));
    } else {
        return ((feature.get('Disponib_4')  > 100) && (feature.get('Disponib_4')  <= 200));
    }
}


function ConservasDurazno_27rule5_eval_expression(context) {
    // Disponib_4 > 200 AND Disponib_4 <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 200) && (feature.get('Disponib_4')  <= 400));
    } else {
        return ((feature.get('Disponib_4')  > 200) && (feature.get('Disponib_4')  <= 400));
    }
}


function ConservasDurazno_27rule6_eval_expression(context) {
    // Disponib_4 > 400 AND Disponib_4 <= 600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 400) && (feature.get('Disponib_4')  <= 600));
    } else {
        return ((feature.get('Disponib_4')  > 400) && (feature.get('Disponib_4')  <= 600));
    }
}


function ConservasDurazno_27rule7_eval_expression(context) {
    // Disponib_4 > 600 AND Disponib_4 <= 800

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 600) && (feature.get('Disponib_4')  <= 800));
    } else {
        return ((feature.get('Disponib_4')  > 600) && (feature.get('Disponib_4')  <= 800));
    }
}


function ConservasDurazno_27rule8_eval_expression(context) {
    // Disponib_4 > 800 AND Disponib_4 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 800) && (feature.get('Disponib_4')  <= 1000));
    } else {
        return ((feature.get('Disponib_4')  > 800) && (feature.get('Disponib_4')  <= 1000));
    }
}


function ConservasDurazno_27rule9_eval_expression(context) {
    // Disponib_4 > 1000 AND Disponib_4 <= 1200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 1000) && (feature.get('Disponib_4')  <= 1200));
    } else {
        return ((feature.get('Disponib_4')  > 1000) && (feature.get('Disponib_4')  <= 1200));
    }
}


function EnergiaAlmendro_28rule0_eval_expression(context) {
    // Potencia53 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia53')  == 0);
    } else {
        return (feature.get('Potencia53')  == 0);
    }
}


function EnergiaAlmendro_28rule1_eval_expression(context) {
    // Potencia53 > 0 AND Potencia53 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia53')  > 0) && (feature.get('Potencia53')  <= 10));
    } else {
        return ((feature.get('Potencia53')  > 0) && (feature.get('Potencia53')  <= 10));
    }
}


function EnergiaAlmendro_28rule2_eval_expression(context) {
    // Potencia53 > 10 AND Potencia53 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia53')  > 10) && (feature.get('Potencia53')  <= 100));
    } else {
        return ((feature.get('Potencia53')  > 10) && (feature.get('Potencia53')  <= 100));
    }
}


function EnergiaAlmendro_28rule3_eval_expression(context) {
    // Potencia53 > 100 AND Potencia53 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia53')  > 100) && (feature.get('Potencia53')  <= 1000));
    } else {
        return ((feature.get('Potencia53')  > 100) && (feature.get('Potencia53')  <= 1000));
    }
}


function EnergiaAlmendro_28rule4_eval_expression(context) {
    // Potencia53 > 1000 AND Potencia53 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia53')  > 1000) && (feature.get('Potencia53')  <= 10000));
    } else {
        return ((feature.get('Potencia53')  > 1000) && (feature.get('Potencia53')  <= 10000));
    }
}


function EnergiaAlmendro_28rule5_eval_expression(context) {
    // Potencia53 > 10000 AND Potencia53 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia53')  > 10000) && (feature.get('Potencia53')  <= 100000));
    } else {
        return ((feature.get('Potencia53')  > 10000) && (feature.get('Potencia53')  <= 100000));
    }
}


function EnergiaAlmendro_28rule6_eval_expression(context) {
    // Potencia53 > 100000 AND Potencia53 <= 250000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia53')  > 100000) && (feature.get('Potencia53')  <= 250000));
    } else {
        return ((feature.get('Potencia53')  > 100000) && (feature.get('Potencia53')  <= 250000));
    }
}


function EnergiaAlmendro_28rule7_eval_expression(context) {
    // Potencia53 > 250000 AND Potencia53 <= 500000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia53')  > 250000) && (feature.get('Potencia53')  <= 500000));
    } else {
        return ((feature.get('Potencia53')  > 250000) && (feature.get('Potencia53')  <= 500000));
    }
}


function EnergiaAlmendro_28rule8_eval_expression(context) {
    // Potencia53 > 500000 AND Potencia53 <= 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia53')  > 500000) && (feature.get('Potencia53')  <= 750000));
    } else {
        return ((feature.get('Potencia53')  > 500000) && (feature.get('Potencia53')  <= 750000));
    }
}


function EnergiaAlmendro_28rule9_eval_expression(context) {
    // Potencia53 > 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia53')  > 750000);
    } else {
        return (feature.get('Potencia53')  > 750000);
    }
}


function EnergiaMembrillo_29rule0_eval_expression(context) {
    // Potencia48 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia48')  == 0);
    } else {
        return (feature.get('Potencia48')  == 0);
    }
}


function EnergiaMembrillo_29rule1_eval_expression(context) {
    // Potencia48 > 0 AND Potencia48 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia48')  > 0) && (feature.get('Potencia48')  <= 10));
    } else {
        return ((feature.get('Potencia48')  > 0) && (feature.get('Potencia48')  <= 10));
    }
}


function EnergiaMembrillo_29rule2_eval_expression(context) {
    // Potencia48 > 10 AND Potencia48 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia48')  > 10) && (feature.get('Potencia48')  <= 100));
    } else {
        return ((feature.get('Potencia48')  > 10) && (feature.get('Potencia48')  <= 100));
    }
}


function EnergiaMembrillo_29rule3_eval_expression(context) {
    // Potencia48 > 100 AND Potencia48 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia48')  > 100) && (feature.get('Potencia48')  <= 1000));
    } else {
        return ((feature.get('Potencia48')  > 100) && (feature.get('Potencia48')  <= 1000));
    }
}


function EnergiaMembrillo_29rule4_eval_expression(context) {
    // Potencia48 > 1000 AND Potencia48 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia48')  > 1000) && (feature.get('Potencia48')  <= 10000));
    } else {
        return ((feature.get('Potencia48')  > 1000) && (feature.get('Potencia48')  <= 10000));
    }
}


function EnergiaMembrillo_29rule5_eval_expression(context) {
    // Potencia48 > 10000 AND Potencia48 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia48')  > 10000) && (feature.get('Potencia48')  <= 100000));
    } else {
        return ((feature.get('Potencia48')  > 10000) && (feature.get('Potencia48')  <= 100000));
    }
}


function EnergiaMembrillo_29rule6_eval_expression(context) {
    // Potencia48 > 100000 AND Potencia48 <= 250000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia48')  > 100000) && (feature.get('Potencia48')  <= 250000));
    } else {
        return ((feature.get('Potencia48')  > 100000) && (feature.get('Potencia48')  <= 250000));
    }
}


function EnergiaMembrillo_29rule7_eval_expression(context) {
    // Potencia48 > 250000 AND Potencia48 <= 500000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia48')  > 250000) && (feature.get('Potencia48')  <= 500000));
    } else {
        return ((feature.get('Potencia48')  > 250000) && (feature.get('Potencia48')  <= 500000));
    }
}


function EnergiaMembrillo_29rule8_eval_expression(context) {
    // Potencia48 > 500000 AND Potencia48 <= 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia48')  > 500000) && (feature.get('Potencia48')  <= 750000));
    } else {
        return ((feature.get('Potencia48')  > 500000) && (feature.get('Potencia48')  <= 750000));
    }
}


function EnergiaMembrillo_29rule9_eval_expression(context) {
    // Potencia48 > 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia48')  > 750000);
    } else {
        return (feature.get('Potencia48')  > 750000);
    }
}


function EnergiaCerezo_30rule0_eval_expression(context) {
    // Potencia45 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia45')  == 0);
    } else {
        return (feature.get('Potencia45')  == 0);
    }
}


function EnergiaCerezo_30rule1_eval_expression(context) {
    // Potencia45 > 0 AND Potencia45 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia45')  > 0) && (feature.get('Potencia45')  <= 10));
    } else {
        return ((feature.get('Potencia45')  > 0) && (feature.get('Potencia45')  <= 10));
    }
}


function EnergiaCerezo_30rule2_eval_expression(context) {
    // Potencia45 > 10 AND Potencia45 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia45')  > 10) && (feature.get('Potencia45')  <= 100));
    } else {
        return ((feature.get('Potencia45')  > 10) && (feature.get('Potencia45')  <= 100));
    }
}


function EnergiaCerezo_30rule3_eval_expression(context) {
    // Potencia45 > 100 AND Potencia45 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia45')  > 100) && (feature.get('Potencia45')  <= 1000));
    } else {
        return ((feature.get('Potencia45')  > 100) && (feature.get('Potencia45')  <= 1000));
    }
}


function EnergiaCerezo_30rule4_eval_expression(context) {
    // Potencia45 > 1000 AND Potencia45 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia45')  > 1000) && (feature.get('Potencia45')  <= 10000));
    } else {
        return ((feature.get('Potencia45')  > 1000) && (feature.get('Potencia45')  <= 10000));
    }
}


function EnergiaCerezo_30rule5_eval_expression(context) {
    // Potencia45 > 10000 AND Potencia45 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia45')  > 10000) && (feature.get('Potencia45')  <= 100000));
    } else {
        return ((feature.get('Potencia45')  > 10000) && (feature.get('Potencia45')  <= 100000));
    }
}


function EnergiaCerezo_30rule6_eval_expression(context) {
    // Potencia45 > 100000 AND Potencia45 <= 250000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia45')  > 100000) && (feature.get('Potencia45')  <= 250000));
    } else {
        return ((feature.get('Potencia45')  > 100000) && (feature.get('Potencia45')  <= 250000));
    }
}


function EnergiaCerezo_30rule7_eval_expression(context) {
    // Potencia45 > 250000 AND Potencia45 <= 500000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia45')  > 250000) && (feature.get('Potencia45')  <= 500000));
    } else {
        return ((feature.get('Potencia45')  > 250000) && (feature.get('Potencia45')  <= 500000));
    }
}


function EnergiaCerezo_30rule8_eval_expression(context) {
    // Potencia45 > 500000 AND Potencia45 <= 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia45')  > 500000) && (feature.get('Potencia45')  <= 750000));
    } else {
        return ((feature.get('Potencia45')  > 500000) && (feature.get('Potencia45')  <= 750000));
    }
}


function EnergiaCerezo_30rule9_eval_expression(context) {
    // Potencia45 > 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia45')  > 750000);
    } else {
        return (feature.get('Potencia45')  > 750000);
    }
}


function EnergiaNogal_31rule0_eval_expression(context) {
    // Potencia39 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia39')  == 0);
    } else {
        return (feature.get('Potencia39')  == 0);
    }
}


function EnergiaNogal_31rule1_eval_expression(context) {
    // Potencia39 > 0 AND Potencia39 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia39')  > 0) && (feature.get('Potencia39')  <= 10));
    } else {
        return ((feature.get('Potencia39')  > 0) && (feature.get('Potencia39')  <= 10));
    }
}


function EnergiaNogal_31rule2_eval_expression(context) {
    // Potencia39 > 10 AND Potencia39 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia39')  > 10) && (feature.get('Potencia39')  <= 100));
    } else {
        return ((feature.get('Potencia39')  > 10) && (feature.get('Potencia39')  <= 100));
    }
}


function EnergiaNogal_31rule3_eval_expression(context) {
    // Potencia39 > 100 AND Potencia39 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia39')  > 100) && (feature.get('Potencia39')  <= 1000));
    } else {
        return ((feature.get('Potencia39')  > 100) && (feature.get('Potencia39')  <= 1000));
    }
}


function EnergiaNogal_31rule4_eval_expression(context) {
    // Potencia39 > 1000 AND Potencia39 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia39')  > 1000) && (feature.get('Potencia39')  <= 10000));
    } else {
        return ((feature.get('Potencia39')  > 1000) && (feature.get('Potencia39')  <= 10000));
    }
}


function EnergiaNogal_31rule5_eval_expression(context) {
    // Potencia39 > 10000 AND Potencia39 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia39')  > 10000) && (feature.get('Potencia39')  <= 100000));
    } else {
        return ((feature.get('Potencia39')  > 10000) && (feature.get('Potencia39')  <= 100000));
    }
}


function EnergiaNogal_31rule6_eval_expression(context) {
    // Potencia39 > 100000 AND Potencia39 <= 250000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia39')  > 100000) && (feature.get('Potencia39')  <= 250000));
    } else {
        return ((feature.get('Potencia39')  > 100000) && (feature.get('Potencia39')  <= 250000));
    }
}


function EnergiaNogal_31rule7_eval_expression(context) {
    // Potencia39 > 250000 AND Potencia39 <= 500000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia39')  > 250000) && (feature.get('Potencia39')  <= 500000));
    } else {
        return ((feature.get('Potencia39')  > 250000) && (feature.get('Potencia39')  <= 500000));
    }
}


function EnergiaNogal_31rule8_eval_expression(context) {
    // Potencia39 > 500000 AND Potencia39 <= 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia39')  > 500000) && (feature.get('Potencia39')  <= 750000));
    } else {
        return ((feature.get('Potencia39')  > 500000) && (feature.get('Potencia39')  <= 750000));
    }
}


function EnergiaNogal_31rule9_eval_expression(context) {
    // Potencia39 > 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia39')  > 750000);
    } else {
        return (feature.get('Potencia39')  > 750000);
    }
}


function EnergiaDamasco_32rule0_eval_expression(context) {
    // Potencia33 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia33')  == 0);
    } else {
        return (feature.get('Potencia33')  == 0);
    }
}


function EnergiaDamasco_32rule1_eval_expression(context) {
    // Potencia33 > 0 AND Potencia33 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia33')  > 0) && (feature.get('Potencia33')  <= 10));
    } else {
        return ((feature.get('Potencia33')  > 0) && (feature.get('Potencia33')  <= 10));
    }
}


function EnergiaDamasco_32rule2_eval_expression(context) {
    // Potencia33 > 10 AND Potencia33 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia33')  > 10) && (feature.get('Potencia33')  <= 100));
    } else {
        return ((feature.get('Potencia33')  > 10) && (feature.get('Potencia33')  <= 100));
    }
}


function EnergiaDamasco_32rule3_eval_expression(context) {
    // Potencia33 > 100 AND Potencia33 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia33')  > 100) && (feature.get('Potencia33')  <= 1000));
    } else {
        return ((feature.get('Potencia33')  > 100) && (feature.get('Potencia33')  <= 1000));
    }
}


function EnergiaDamasco_32rule4_eval_expression(context) {
    // Potencia33 > 1000 AND Potencia33 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia33')  > 1000) && (feature.get('Potencia33')  <= 10000));
    } else {
        return ((feature.get('Potencia33')  > 1000) && (feature.get('Potencia33')  <= 10000));
    }
}


function EnergiaDamasco_32rule5_eval_expression(context) {
    // Potencia33 > 10000 AND Potencia33 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia33')  > 10000) && (feature.get('Potencia33')  <= 100000));
    } else {
        return ((feature.get('Potencia33')  > 10000) && (feature.get('Potencia33')  <= 100000));
    }
}


function EnergiaDamasco_32rule6_eval_expression(context) {
    // Potencia33 > 100000 AND Potencia33 <= 250000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia33')  > 100000) && (feature.get('Potencia33')  <= 250000));
    } else {
        return ((feature.get('Potencia33')  > 100000) && (feature.get('Potencia33')  <= 250000));
    }
}


function EnergiaDamasco_32rule7_eval_expression(context) {
    // Potencia33 > 250000 AND Potencia33 <= 500000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia33')  > 250000) && (feature.get('Potencia33')  <= 500000));
    } else {
        return ((feature.get('Potencia33')  > 250000) && (feature.get('Potencia33')  <= 500000));
    }
}


function EnergiaDamasco_32rule8_eval_expression(context) {
    // Potencia33 > 500000 AND Potencia33 <= 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia33')  > 500000) && (feature.get('Potencia33')  <= 750000));
    } else {
        return ((feature.get('Potencia33')  > 500000) && (feature.get('Potencia33')  <= 750000));
    }
}


function EnergiaDamasco_32rule9_eval_expression(context) {
    // Potencia33 > 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia33')  > 750000);
    } else {
        return (feature.get('Potencia33')  > 750000);
    }
}


function EnergiaManzano_33rule0_eval_expression(context) {
    // Potencia29 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia29')  == 0);
    } else {
        return (feature.get('Potencia29')  == 0);
    }
}


function EnergiaManzano_33rule1_eval_expression(context) {
    // Potencia29 > 0 AND Potencia29 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia29')  > 0) && (feature.get('Potencia29')  <= 10));
    } else {
        return ((feature.get('Potencia29')  > 0) && (feature.get('Potencia29')  <= 10));
    }
}


function EnergiaManzano_33rule2_eval_expression(context) {
    // Potencia29 > 10 AND Potencia29 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia29')  > 10) && (feature.get('Potencia29')  <= 100));
    } else {
        return ((feature.get('Potencia29')  > 10) && (feature.get('Potencia29')  <= 100));
    }
}


function EnergiaManzano_33rule3_eval_expression(context) {
    // Potencia29 > 100 AND Potencia29 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia29')  > 100) && (feature.get('Potencia29')  <= 1000));
    } else {
        return ((feature.get('Potencia29')  > 100) && (feature.get('Potencia29')  <= 1000));
    }
}


function EnergiaManzano_33rule4_eval_expression(context) {
    // Potencia29 > 1000 AND Potencia29 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia29')  > 1000) && (feature.get('Potencia29')  <= 10000));
    } else {
        return ((feature.get('Potencia29')  > 1000) && (feature.get('Potencia29')  <= 10000));
    }
}


function EnergiaManzano_33rule5_eval_expression(context) {
    // Potencia29 > 10000 AND Potencia29 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia29')  > 10000) && (feature.get('Potencia29')  <= 100000));
    } else {
        return ((feature.get('Potencia29')  > 10000) && (feature.get('Potencia29')  <= 100000));
    }
}


function EnergiaManzano_33rule6_eval_expression(context) {
    // Potencia29 > 100000 AND Potencia29 <= 250000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia29')  > 100000) && (feature.get('Potencia29')  <= 250000));
    } else {
        return ((feature.get('Potencia29')  > 100000) && (feature.get('Potencia29')  <= 250000));
    }
}


function EnergiaManzano_33rule7_eval_expression(context) {
    // Potencia29 > 250000 AND Potencia29 <= 500000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia29')  > 250000) && (feature.get('Potencia29')  <= 500000));
    } else {
        return ((feature.get('Potencia29')  > 250000) && (feature.get('Potencia29')  <= 500000));
    }
}


function EnergiaManzano_33rule8_eval_expression(context) {
    // Potencia29 > 500000 AND Potencia29 <= 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia29')  > 500000) && (feature.get('Potencia29')  <= 750000));
    } else {
        return ((feature.get('Potencia29')  > 500000) && (feature.get('Potencia29')  <= 750000));
    }
}


function EnergiaManzano_33rule9_eval_expression(context) {
    // Potencia29 > 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia29')  > 750000);
    } else {
        return (feature.get('Potencia29')  > 750000);
    }
}


function EnergiaPeral_34rule0_eval_expression(context) {
    // Potencia25 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia25')  == 0);
    } else {
        return (feature.get('Potencia25')  == 0);
    }
}


function EnergiaPeral_34rule1_eval_expression(context) {
    // Potencia25 > 0 AND Potencia25 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  > 0) && (feature.get('Potencia25')  <= 10));
    } else {
        return ((feature.get('Potencia25')  > 0) && (feature.get('Potencia25')  <= 10));
    }
}


function EnergiaPeral_34rule2_eval_expression(context) {
    // Potencia25 > 10 AND Potencia25 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  > 10) && (feature.get('Potencia25')  <= 100));
    } else {
        return ((feature.get('Potencia25')  > 10) && (feature.get('Potencia25')  <= 100));
    }
}


function EnergiaPeral_34rule3_eval_expression(context) {
    // Potencia25 > 100 AND Potencia25 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  > 100) && (feature.get('Potencia25')  <= 1000));
    } else {
        return ((feature.get('Potencia25')  > 100) && (feature.get('Potencia25')  <= 1000));
    }
}


function EnergiaPeral_34rule4_eval_expression(context) {
    // Potencia25 > 1000 AND Potencia25 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  > 1000) && (feature.get('Potencia25')  <= 10000));
    } else {
        return ((feature.get('Potencia25')  > 1000) && (feature.get('Potencia25')  <= 10000));
    }
}


function EnergiaPeral_34rule5_eval_expression(context) {
    // Potencia25 > 10000 AND Potencia25 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  > 10000) && (feature.get('Potencia25')  <= 100000));
    } else {
        return ((feature.get('Potencia25')  > 10000) && (feature.get('Potencia25')  <= 100000));
    }
}


function EnergiaPeral_34rule6_eval_expression(context) {
    // Potencia25 > 100000 AND Potencia25 <= 250000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  > 100000) && (feature.get('Potencia25')  <= 250000));
    } else {
        return ((feature.get('Potencia25')  > 100000) && (feature.get('Potencia25')  <= 250000));
    }
}


function EnergiaPeral_34rule7_eval_expression(context) {
    // Potencia25 > 250000 AND Potencia25 <= 500000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  > 250000) && (feature.get('Potencia25')  <= 500000));
    } else {
        return ((feature.get('Potencia25')  > 250000) && (feature.get('Potencia25')  <= 500000));
    }
}


function EnergiaPeral_34rule8_eval_expression(context) {
    // Potencia25 > 500000 AND Potencia25 <= 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia25')  > 500000) && (feature.get('Potencia25')  <= 750000));
    } else {
        return ((feature.get('Potencia25')  > 500000) && (feature.get('Potencia25')  <= 750000));
    }
}


function EnergiaPeral_34rule9_eval_expression(context) {
    // Potencia25 > 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia25')  > 750000);
    } else {
        return (feature.get('Potencia25')  > 750000);
    }
}


function EnergiaOlivo_35rule0_eval_expression(context) {
    // Potencia21 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia21')  == 0);
    } else {
        return (feature.get('Potencia21')  == 0);
    }
}


function EnergiaOlivo_35rule1_eval_expression(context) {
    // Potencia21 > 0 AND Potencia21 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia21')  > 0) && (feature.get('Potencia21')  <= 10));
    } else {
        return ((feature.get('Potencia21')  > 0) && (feature.get('Potencia21')  <= 10));
    }
}


function EnergiaOlivo_35rule2_eval_expression(context) {
    // Potencia21 > 10 AND Potencia21 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia21')  > 10) && (feature.get('Potencia21')  <= 100));
    } else {
        return ((feature.get('Potencia21')  > 10) && (feature.get('Potencia21')  <= 100));
    }
}


function EnergiaOlivo_35rule3_eval_expression(context) {
    // Potencia21 > 100 AND Potencia21 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia21')  > 100) && (feature.get('Potencia21')  <= 1000));
    } else {
        return ((feature.get('Potencia21')  > 100) && (feature.get('Potencia21')  <= 1000));
    }
}


function EnergiaOlivo_35rule4_eval_expression(context) {
    // Potencia21 > 1000 AND Potencia21 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia21')  > 1000) && (feature.get('Potencia21')  <= 10000));
    } else {
        return ((feature.get('Potencia21')  > 1000) && (feature.get('Potencia21')  <= 10000));
    }
}


function EnergiaOlivo_35rule5_eval_expression(context) {
    // Potencia21 > 10000 AND Potencia21 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia21')  > 10000) && (feature.get('Potencia21')  <= 100000));
    } else {
        return ((feature.get('Potencia21')  > 10000) && (feature.get('Potencia21')  <= 100000));
    }
}


function EnergiaOlivo_35rule6_eval_expression(context) {
    // Potencia21 > 100000 AND Potencia21 <= 250000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia21')  > 100000) && (feature.get('Potencia21')  <= 250000));
    } else {
        return ((feature.get('Potencia21')  > 100000) && (feature.get('Potencia21')  <= 250000));
    }
}


function EnergiaOlivo_35rule7_eval_expression(context) {
    // Potencia21 > 250000 AND Potencia21 <= 500000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia21')  > 250000) && (feature.get('Potencia21')  <= 500000));
    } else {
        return ((feature.get('Potencia21')  > 250000) && (feature.get('Potencia21')  <= 500000));
    }
}


function EnergiaOlivo_35rule8_eval_expression(context) {
    // Potencia21 > 500000 AND Potencia21 <= 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia21')  > 500000) && (feature.get('Potencia21')  <= 750000));
    } else {
        return ((feature.get('Potencia21')  > 500000) && (feature.get('Potencia21')  <= 750000));
    }
}


function EnergiaOlivo_35rule9_eval_expression(context) {
    // Potencia21 > 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia21')  > 750000);
    } else {
        return (feature.get('Potencia21')  > 750000);
    }
}


function EnergiaDuraznero_36rule0_eval_expression(context) {
    // Potencia19 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia19')  == 0);
    } else {
        return (feature.get('Potencia19')  == 0);
    }
}


function EnergiaDuraznero_36rule1_eval_expression(context) {
    // Potencia19 > 0 AND Potencia19 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia19')  > 0) && (feature.get('Potencia19')  <= 10));
    } else {
        return ((feature.get('Potencia19')  > 0) && (feature.get('Potencia19')  <= 10));
    }
}


function EnergiaDuraznero_36rule2_eval_expression(context) {
    // Potencia19 > 10 AND Potencia19 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia19')  > 10) && (feature.get('Potencia19')  <= 100));
    } else {
        return ((feature.get('Potencia19')  > 10) && (feature.get('Potencia19')  <= 100));
    }
}


function EnergiaDuraznero_36rule3_eval_expression(context) {
    // Potencia19 > 100 AND Potencia19 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia19')  > 100) && (feature.get('Potencia19')  <= 1000));
    } else {
        return ((feature.get('Potencia19')  > 100) && (feature.get('Potencia19')  <= 1000));
    }
}


function EnergiaDuraznero_36rule4_eval_expression(context) {
    // Potencia19 > 1000 AND Potencia19 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia19')  > 1000) && (feature.get('Potencia19')  <= 10000));
    } else {
        return ((feature.get('Potencia19')  > 1000) && (feature.get('Potencia19')  <= 10000));
    }
}


function EnergiaDuraznero_36rule5_eval_expression(context) {
    // Potencia19 > 10000 AND Potencia19 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia19')  > 10000) && (feature.get('Potencia19')  <= 100000));
    } else {
        return ((feature.get('Potencia19')  > 10000) && (feature.get('Potencia19')  <= 100000));
    }
}


function EnergiaDuraznero_36rule6_eval_expression(context) {
    // Potencia19 > 100000 AND Potencia19 <= 250000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia19')  > 100000) && (feature.get('Potencia19')  <= 250000));
    } else {
        return ((feature.get('Potencia19')  > 100000) && (feature.get('Potencia19')  <= 250000));
    }
}


function EnergiaDuraznero_36rule7_eval_expression(context) {
    // Potencia19 > 250000 AND Potencia19 <= 500000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia19')  > 250000) && (feature.get('Potencia19')  <= 500000));
    } else {
        return ((feature.get('Potencia19')  > 250000) && (feature.get('Potencia19')  <= 500000));
    }
}


function EnergiaDuraznero_36rule8_eval_expression(context) {
    // Potencia19 > 500000 AND Potencia19 <= 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia19')  > 500000) && (feature.get('Potencia19')  <= 750000));
    } else {
        return ((feature.get('Potencia19')  > 500000) && (feature.get('Potencia19')  <= 750000));
    }
}


function EnergiaDuraznero_36rule9_eval_expression(context) {
    // Potencia19 > 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia19')  > 750000);
    } else {
        return (feature.get('Potencia19')  > 750000);
    }
}


function EnergiaCiruelo_37rule0_eval_expression(context) {
    // Potencia16 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia16')  == 0);
    } else {
        return (feature.get('Potencia16')  == 0);
    }
}


function EnergiaCiruelo_37rule1_eval_expression(context) {
    // Potencia16 > 0 AND Potencia16 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia16')  > 0) && (feature.get('Potencia16')  <= 10));
    } else {
        return ((feature.get('Potencia16')  > 0) && (feature.get('Potencia16')  <= 10));
    }
}


function EnergiaCiruelo_37rule2_eval_expression(context) {
    // Potencia16 > 10 AND Potencia16 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia16')  > 10) && (feature.get('Potencia16')  <= 100));
    } else {
        return ((feature.get('Potencia16')  > 10) && (feature.get('Potencia16')  <= 100));
    }
}


function EnergiaCiruelo_37rule3_eval_expression(context) {
    // Potencia16 > 100 AND Potencia16 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia16')  > 100) && (feature.get('Potencia16')  <= 1000));
    } else {
        return ((feature.get('Potencia16')  > 100) && (feature.get('Potencia16')  <= 1000));
    }
}


function EnergiaCiruelo_37rule4_eval_expression(context) {
    // Potencia16 > 1000 AND Potencia16 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia16')  > 1000) && (feature.get('Potencia16')  <= 10000));
    } else {
        return ((feature.get('Potencia16')  > 1000) && (feature.get('Potencia16')  <= 10000));
    }
}


function EnergiaCiruelo_37rule5_eval_expression(context) {
    // Potencia16 > 10000 AND Potencia16 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia16')  > 10000) && (feature.get('Potencia16')  <= 100000));
    } else {
        return ((feature.get('Potencia16')  > 10000) && (feature.get('Potencia16')  <= 100000));
    }
}


function EnergiaCiruelo_37rule6_eval_expression(context) {
    // Potencia16 > 100000 AND Potencia16 <= 250000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia16')  > 100000) && (feature.get('Potencia16')  <= 250000));
    } else {
        return ((feature.get('Potencia16')  > 100000) && (feature.get('Potencia16')  <= 250000));
    }
}


function EnergiaCiruelo_37rule7_eval_expression(context) {
    // Potencia16 > 250000 AND Potencia16 <= 500000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia16')  > 250000) && (feature.get('Potencia16')  <= 500000));
    } else {
        return ((feature.get('Potencia16')  > 250000) && (feature.get('Potencia16')  <= 500000));
    }
}


function EnergiaCiruelo_37rule8_eval_expression(context) {
    // Potencia16 > 500000 AND Potencia16 <= 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia16')  > 500000) && (feature.get('Potencia16')  <= 750000));
    } else {
        return ((feature.get('Potencia16')  > 500000) && (feature.get('Potencia16')  <= 750000));
    }
}


function EnergiaCiruelo_37rule9_eval_expression(context) {
    // Potencia16 > 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia16')  > 750000);
    } else {
        return (feature.get('Potencia16')  > 750000);
    }
}


function EnergiaVidespaldero_38rule0_eval_expression(context) {
    // Potencia_9 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia_9')  == 0);
    } else {
        return (feature.get('Potencia_9')  == 0);
    }
}


function EnergiaVidespaldero_38rule1_eval_expression(context) {
    // Potencia_9 > 0 AND Potencia_9 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_9')  > 0) && (feature.get('Potencia_9')  <= 10));
    } else {
        return ((feature.get('Potencia_9')  > 0) && (feature.get('Potencia_9')  <= 10));
    }
}


function EnergiaVidespaldero_38rule2_eval_expression(context) {
    // Potencia_9 > 10 AND Potencia_9 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_9')  > 10) && (feature.get('Potencia_9')  <= 100));
    } else {
        return ((feature.get('Potencia_9')  > 10) && (feature.get('Potencia_9')  <= 100));
    }
}


function EnergiaVidespaldero_38rule3_eval_expression(context) {
    // Potencia_9 > 100 AND Potencia_9 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_9')  > 100) && (feature.get('Potencia_9')  <= 1000));
    } else {
        return ((feature.get('Potencia_9')  > 100) && (feature.get('Potencia_9')  <= 1000));
    }
}


function EnergiaVidespaldero_38rule4_eval_expression(context) {
    // Potencia_9 > 1000 AND Potencia_9 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_9')  > 1000) && (feature.get('Potencia_9')  <= 10000));
    } else {
        return ((feature.get('Potencia_9')  > 1000) && (feature.get('Potencia_9')  <= 10000));
    }
}


function EnergiaVidespaldero_38rule5_eval_expression(context) {
    // Potencia_9 > 10000 AND Potencia_9 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_9')  > 10000) && (feature.get('Potencia_9')  <= 100000));
    } else {
        return ((feature.get('Potencia_9')  > 10000) && (feature.get('Potencia_9')  <= 100000));
    }
}


function EnergiaVidespaldero_38rule6_eval_expression(context) {
    // Potencia_9 > 100000 AND Potencia_9 <= 250000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_9')  > 100000) && (feature.get('Potencia_9')  <= 250000));
    } else {
        return ((feature.get('Potencia_9')  > 100000) && (feature.get('Potencia_9')  <= 250000));
    }
}


function EnergiaVidespaldero_38rule7_eval_expression(context) {
    // Potencia_9 > 250000 AND Potencia_9 <= 500000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_9')  > 250000) && (feature.get('Potencia_9')  <= 500000));
    } else {
        return ((feature.get('Potencia_9')  > 250000) && (feature.get('Potencia_9')  <= 500000));
    }
}


function EnergiaVidespaldero_38rule8_eval_expression(context) {
    // Potencia_9 > 500000 AND Potencia_9 <= 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_9')  > 500000) && (feature.get('Potencia_9')  <= 750000));
    } else {
        return ((feature.get('Potencia_9')  > 500000) && (feature.get('Potencia_9')  <= 750000));
    }
}


function EnergiaVidespaldero_38rule9_eval_expression(context) {
    // Potencia_9 > 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia_9')  > 750000);
    } else {
        return (feature.get('Potencia_9')  > 750000);
    }
}


function EnergiaVidparral_39rule0_eval_expression(context) {
    // Potencia_4 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia_4')  == 0);
    } else {
        return (feature.get('Potencia_4')  == 0);
    }
}


function EnergiaVidparral_39rule1_eval_expression(context) {
    // Potencia_4 > 0 AND Potencia_4 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_4')  > 0) && (feature.get('Potencia_4')  <= 10));
    } else {
        return ((feature.get('Potencia_4')  > 0) && (feature.get('Potencia_4')  <= 10));
    }
}


function EnergiaVidparral_39rule2_eval_expression(context) {
    // Potencia_4 > 10 AND Potencia_4 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_4')  > 10) && (feature.get('Potencia_4')  <= 100));
    } else {
        return ((feature.get('Potencia_4')  > 10) && (feature.get('Potencia_4')  <= 100));
    }
}


function EnergiaVidparral_39rule3_eval_expression(context) {
    // Potencia_4 > 100 AND Potencia_4 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_4')  > 100) && (feature.get('Potencia_4')  <= 1000));
    } else {
        return ((feature.get('Potencia_4')  > 100) && (feature.get('Potencia_4')  <= 1000));
    }
}


function EnergiaVidparral_39rule4_eval_expression(context) {
    // Potencia_4 > 1000 AND Potencia_4 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_4')  > 1000) && (feature.get('Potencia_4')  <= 10000));
    } else {
        return ((feature.get('Potencia_4')  > 1000) && (feature.get('Potencia_4')  <= 10000));
    }
}


function EnergiaVidparral_39rule5_eval_expression(context) {
    // Potencia_4 > 10000 AND Potencia_4 <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_4')  > 10000) && (feature.get('Potencia_4')  <= 100000));
    } else {
        return ((feature.get('Potencia_4')  > 10000) && (feature.get('Potencia_4')  <= 100000));
    }
}


function EnergiaVidparral_39rule6_eval_expression(context) {
    // Potencia_4 > 100000 AND Potencia_4 <= 250000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_4')  > 100000) && (feature.get('Potencia_4')  <= 250000));
    } else {
        return ((feature.get('Potencia_4')  > 100000) && (feature.get('Potencia_4')  <= 250000));
    }
}


function EnergiaVidparral_39rule7_eval_expression(context) {
    // Potencia_4 > 250000 AND Potencia_4 <= 500000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_4')  > 250000) && (feature.get('Potencia_4')  <= 500000));
    } else {
        return ((feature.get('Potencia_4')  > 250000) && (feature.get('Potencia_4')  <= 500000));
    }
}


function EnergiaVidparral_39rule8_eval_expression(context) {
    // Potencia_4 > 500000 AND Potencia_4 <= 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Potencia_4')  > 500000) && (feature.get('Potencia_4')  <= 750000));
    } else {
        return ((feature.get('Potencia_4')  > 500000) && (feature.get('Potencia_4')  <= 750000));
    }
}


function EnergiaVidparral_39rule9_eval_expression(context) {
    // Potencia_4 > 750000

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Potencia_4')  > 750000);
    } else {
        return (feature.get('Potencia_4')  > 750000);
    }
}


function BiomasaAlmendro_40rule0_eval_expression(context) {
    // Biomasa = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Biomasa')  == 0.0);
    } else {
        return (feature.get('Biomasa')  == 0.0);
    }
}


function BiomasaAlmendro_40rule1_eval_expression(context) {
    // Biomasa > 0.1 AND Biomasa <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 0.1) && (feature.get('Biomasa')  <= 100));
    } else {
        return ((feature.get('Biomasa')  > 0.1) && (feature.get('Biomasa')  <= 100));
    }
}


function BiomasaAlmendro_40rule2_eval_expression(context) {
    // Biomasa > 100 AND Biomasa <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 100) && (feature.get('Biomasa')  <= 200));
    } else {
        return ((feature.get('Biomasa')  > 100) && (feature.get('Biomasa')  <= 200));
    }
}


function BiomasaAlmendro_40rule3_eval_expression(context) {
    // Biomasa > 200 AND Biomasa <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 200) && (feature.get('Biomasa')  <= 300));
    } else {
        return ((feature.get('Biomasa')  > 200) && (feature.get('Biomasa')  <= 300));
    }
}


function BiomasaAlmendro_40rule4_eval_expression(context) {
    // Biomasa > 300 AND Biomasa <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 300) && (feature.get('Biomasa')  <= 400));
    } else {
        return ((feature.get('Biomasa')  > 300) && (feature.get('Biomasa')  <= 400));
    }
}


function BiomasaAlmendro_40rule5_eval_expression(context) {
    // Biomasa > 400 AND Biomasa <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 400) && (feature.get('Biomasa')  <= 500));
    } else {
        return ((feature.get('Biomasa')  > 400) && (feature.get('Biomasa')  <= 500));
    }
}


function BiomasaAlmendro_40rule6_eval_expression(context) {
    // Biomasa > 500 AND Biomasa <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 500) && (feature.get('Biomasa')  <= 1000));
    } else {
        return ((feature.get('Biomasa')  > 500) && (feature.get('Biomasa')  <= 1000));
    }
}


function BiomasaAlmendro_40rule7_eval_expression(context) {
    // Biomasa > 1000 AND Biomasa <= 1500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 1000) && (feature.get('Biomasa')  <= 1500));
    } else {
        return ((feature.get('Biomasa')  > 1000) && (feature.get('Biomasa')  <= 1500));
    }
}


function BiomasaAlmendro_40rule8_eval_expression(context) {
    // Biomasa > 1500 AND Biomasa <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 1500) && (feature.get('Biomasa')  <= 2000));
    } else {
        return ((feature.get('Biomasa')  > 1500) && (feature.get('Biomasa')  <= 2000));
    }
}


function BiomasaAlmendro_40rule9_eval_expression(context) {
    // Biomasa > 2000 AND Biomasa <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 2000) && (feature.get('Biomasa')  <= 2500));
    } else {
        return ((feature.get('Biomasa')  > 2000) && (feature.get('Biomasa')  <= 2500));
    }
}


function BiomasaAlmendro_40rule10_eval_expression(context) {
    // Biomasa > 2500 AND Biomasa <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 2500) && (feature.get('Biomasa')  <= 3000));
    } else {
        return ((feature.get('Biomasa')  > 2500) && (feature.get('Biomasa')  <= 3000));
    }
}


function BiomasaAlmendro_40rule11_eval_expression(context) {
    // Biomasa > 3000 AND Biomasa <= 3500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 3000) && (feature.get('Biomasa')  <= 3500));
    } else {
        return ((feature.get('Biomasa')  > 3000) && (feature.get('Biomasa')  <= 3500));
    }
}


function BiomasaAlmendro_40rule12_eval_expression(context) {
    // Biomasa > 3500 AND Biomasa <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Biomasa')  > 3500) && (feature.get('Biomasa')  <= 4000));
    } else {
        return ((feature.get('Biomasa')  > 3500) && (feature.get('Biomasa')  <= 4000));
    }
}


function BiomasaMembrillo_41rule0_eval_expression(context) {
    // Disponib48 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib48')  == 0);
    } else {
        return (feature.get('Disponib48')  == 0);
    }
}


function BiomasaMembrillo_41rule1_eval_expression(context) {
    // Disponib48 > 0.1 AND Disponib48 <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib48')  > 0.1) && (feature.get('Disponib48')  <= 10));
    } else {
        return ((feature.get('Disponib48')  > 0.1) && (feature.get('Disponib48')  <= 10));
    }
}


function BiomasaMembrillo_41rule2_eval_expression(context) {
    // Disponib48 > 10 AND Disponib48 <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib48')  > 10) && (feature.get('Disponib48')  <= 20));
    } else {
        return ((feature.get('Disponib48')  > 10) && (feature.get('Disponib48')  <= 20));
    }
}


function BiomasaMembrillo_41rule3_eval_expression(context) {
    // Disponib48 > 20 AND Disponib48 <= 30

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib48')  > 20) && (feature.get('Disponib48')  <= 30));
    } else {
        return ((feature.get('Disponib48')  > 20) && (feature.get('Disponib48')  <= 30));
    }
}


function BiomasaMembrillo_41rule4_eval_expression(context) {
    // Disponib48 > 30 AND Disponib48 <= 40

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib48')  > 30) && (feature.get('Disponib48')  <= 40));
    } else {
        return ((feature.get('Disponib48')  > 30) && (feature.get('Disponib48')  <= 40));
    }
}


function BiomasaMembrillo_41rule5_eval_expression(context) {
    // Disponib48 > 40 AND Disponib48 <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib48')  > 40) && (feature.get('Disponib48')  <= 50));
    } else {
        return ((feature.get('Disponib48')  > 40) && (feature.get('Disponib48')  <= 50));
    }
}


function BiomasaMembrillo_41rule6_eval_expression(context) {
    // Disponib48 > 50 AND Disponib48 <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib48')  > 50) && (feature.get('Disponib48')  <= 60));
    } else {
        return ((feature.get('Disponib48')  > 50) && (feature.get('Disponib48')  <= 60));
    }
}


function BiomasaMembrillo_41rule7_eval_expression(context) {
    // Disponib48 > 60 AND Disponib48 <= 70

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib48')  > 60) && (feature.get('Disponib48')  <= 70));
    } else {
        return ((feature.get('Disponib48')  > 60) && (feature.get('Disponib48')  <= 70));
    }
}


function BiomasaMembrillo_41rule8_eval_expression(context) {
    // Disponib48 > 70 AND Disponib48 <= 80

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib48')  > 70) && (feature.get('Disponib48')  <= 80));
    } else {
        return ((feature.get('Disponib48')  > 70) && (feature.get('Disponib48')  <= 80));
    }
}


function BiomasaMembrillo_41rule9_eval_expression(context) {
    // Disponib48 > 80 AND Disponib48 <= 90

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib48')  > 80) && (feature.get('Disponib48')  <= 90));
    } else {
        return ((feature.get('Disponib48')  > 80) && (feature.get('Disponib48')  <= 90));
    }
}


function BiomasaMembrillo_41rule10_eval_expression(context) {
    // Disponib48 > 90 AND Disponib48 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib48')  > 90) && (feature.get('Disponib48')  <= 100));
    } else {
        return ((feature.get('Disponib48')  > 90) && (feature.get('Disponib48')  <= 100));
    }
}


function BiomasaMembrillo_41rule11_eval_expression(context) {
    // Disponib48 > 100 AND Disponib48 <= 110

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib48')  > 100) && (feature.get('Disponib48')  <= 110));
    } else {
        return ((feature.get('Disponib48')  > 100) && (feature.get('Disponib48')  <= 110));
    }
}


function BiomasaCerezo_42rule0_eval_expression(context) {
    // Disponib45 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib45')  == 0.0);
    } else {
        return (feature.get('Disponib45')  == 0.0);
    }
}


function BiomasaCerezo_42rule1_eval_expression(context) {
    // Disponib45 > 0.1 AND Disponib45 <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib45')  > 0.1) && (feature.get('Disponib45')  <= 50));
    } else {
        return ((feature.get('Disponib45')  > 0.1) && (feature.get('Disponib45')  <= 50));
    }
}


function BiomasaCerezo_42rule2_eval_expression(context) {
    // Disponib45 > 50 AND Disponib45 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib45')  > 50) && (feature.get('Disponib45')  <= 100));
    } else {
        return ((feature.get('Disponib45')  > 50) && (feature.get('Disponib45')  <= 100));
    }
}


function BiomasaCerezo_42rule3_eval_expression(context) {
    // Disponib45 > 100 AND Dsiponib45 <= 150

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib45')  > 100) && (feature.get('Dsiponib45')  <= 150));
    } else {
        return ((feature.get('Disponib45')  > 100) && (feature.get('Dsiponib45')  <= 150));
    }
}


function BiomasaCerezo_42rule4_eval_expression(context) {
    // Disponib45 > 150 AND Disponib45 <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib45')  > 150) && (feature.get('Disponib45')  <= 200));
    } else {
        return ((feature.get('Disponib45')  > 150) && (feature.get('Disponib45')  <= 200));
    }
}


function BiomasaCerezo_42rule5_eval_expression(context) {
    // Disponib45 > 200 AND Disponib45 <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib45')  > 200) && (feature.get('Disponib45')  <= 250));
    } else {
        return ((feature.get('Disponib45')  > 200) && (feature.get('Disponib45')  <= 250));
    }
}


function BiomasaCerezo_42rule6_eval_expression(context) {
    // Disponib45 > 250 AND Disponib45 <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib45')  > 250) && (feature.get('Disponib45')  <= 500));
    } else {
        return ((feature.get('Disponib45')  > 250) && (feature.get('Disponib45')  <= 500));
    }
}


function BiomasaCerezo_42rule7_eval_expression(context) {
    // Disponib45 > 500 AND Disponib45 <= 750

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib45')  > 500) && (feature.get('Disponib45')  <= 750));
    } else {
        return ((feature.get('Disponib45')  > 500) && (feature.get('Disponib45')  <= 750));
    }
}


function BiomasaCerezo_42rule8_eval_expression(context) {
    // Disponib45 > 750 AND Disponib45 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib45')  > 750) && (feature.get('Disponib45')  <= 1000));
    } else {
        return ((feature.get('Disponib45')  > 750) && (feature.get('Disponib45')  <= 1000));
    }
}


function BiomasaCerezo_42rule9_eval_expression(context) {
    // Disponib45 > 1000 AND Disponib45 <= 1250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib45')  > 1000) && (feature.get('Disponib45')  <= 1250));
    } else {
        return ((feature.get('Disponib45')  > 1000) && (feature.get('Disponib45')  <= 1250));
    }
}


function BiomasaCerezo_42rule10_eval_expression(context) {
    // Disponib45 > 1250 AND Disponib45 <= 1500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib45')  > 1250) && (feature.get('Disponib45')  <= 1500));
    } else {
        return ((feature.get('Disponib45')  > 1250) && (feature.get('Disponib45')  <= 1500));
    }
}


function BiomasaCerezo_42rule11_eval_expression(context) {
    // Disponib45 > 1500 AND Disponib45 <= 1750

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib45')  > 1500) && (feature.get('Disponib45')  <= 1750));
    } else {
        return ((feature.get('Disponib45')  > 1500) && (feature.get('Disponib45')  <= 1750));
    }
}


function BiomasaCerezo_42rule12_eval_expression(context) {
    // Disponib45 > 1750 AND Disponib45 <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib45')  > 1750) && (feature.get('Disponib45')  <= 2000));
    } else {
        return ((feature.get('Disponib45')  > 1750) && (feature.get('Disponib45')  <= 2000));
    }
}


function BiomasaCerezo_42rule13_eval_expression(context) {
    // Disponib45 > 2000 AND Disponib45 <= 2250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib45')  > 2000) && (feature.get('Disponib45')  <= 2250));
    } else {
        return ((feature.get('Disponib45')  > 2000) && (feature.get('Disponib45')  <= 2250));
    }
}


function BiomasaCerezo_42rule14_eval_expression(context) {
    // Disponib45 > 2250 AND Disponib45 <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib45')  > 2250) && (feature.get('Disponib45')  <= 2500));
    } else {
        return ((feature.get('Disponib45')  > 2250) && (feature.get('Disponib45')  <= 2500));
    }
}


function BiomasaNogal_43rule0_eval_expression(context) {
    // Disponib39 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib39')  == 0);
    } else {
        return (feature.get('Disponib39')  == 0);
    }
}


function BiomasaNogal_43rule1_eval_expression(context) {
    // Disponib39 > 0.1 AND Disponib39 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 0.1) && (feature.get('Disponib39')  <= 100));
    } else {
        return ((feature.get('Disponib39')  > 0.1) && (feature.get('Disponib39')  <= 100));
    }
}


function BiomasaNogal_43rule2_eval_expression(context) {
    // Disponib39 > 100 AND Disponib39 <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 100) && (feature.get('Disponib39')  <= 200));
    } else {
        return ((feature.get('Disponib39')  > 100) && (feature.get('Disponib39')  <= 200));
    }
}


function BiomasaNogal_43rule3_eval_expression(context) {
    // Disponib39 > 200 AND Disponib39 <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 200) && (feature.get('Disponib39')  <= 300));
    } else {
        return ((feature.get('Disponib39')  > 200) && (feature.get('Disponib39')  <= 300));
    }
}


function BiomasaNogal_43rule4_eval_expression(context) {
    // Disponib39 > 300 AND Disponib39 <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 300) && (feature.get('Disponib39')  <= 400));
    } else {
        return ((feature.get('Disponib39')  > 300) && (feature.get('Disponib39')  <= 400));
    }
}


function BiomasaNogal_43rule5_eval_expression(context) {
    // Disponib39 > 400 AND Disponib39 <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 400) && (feature.get('Disponib39')  <= 500));
    } else {
        return ((feature.get('Disponib39')  > 400) && (feature.get('Disponib39')  <= 500));
    }
}


function BiomasaNogal_43rule6_eval_expression(context) {
    // Disponib39 > 500 AND Disponib39 <= 600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 500) && (feature.get('Disponib39')  <= 600));
    } else {
        return ((feature.get('Disponib39')  > 500) && (feature.get('Disponib39')  <= 600));
    }
}


function BiomasaNogal_43rule7_eval_expression(context) {
    // Disponib39 > 600 AND Disponib39 <= 700

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 600) && (feature.get('Disponib39')  <= 700));
    } else {
        return ((feature.get('Disponib39')  > 600) && (feature.get('Disponib39')  <= 700));
    }
}


function BiomasaNogal_43rule8_eval_expression(context) {
    // Disponib39 > 700 AND Disponib39 <= 1400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 700) && (feature.get('Disponib39')  <= 1400));
    } else {
        return ((feature.get('Disponib39')  > 700) && (feature.get('Disponib39')  <= 1400));
    }
}


function BiomasaNogal_43rule9_eval_expression(context) {
    // Disponib39 > 1400 AND Disponib39 <= 2100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 1400) && (feature.get('Disponib39')  <= 2100));
    } else {
        return ((feature.get('Disponib39')  > 1400) && (feature.get('Disponib39')  <= 2100));
    }
}


function BiomasaNogal_43rule10_eval_expression(context) {
    // Disponib39 > 2100 AND Disponib39 <= 2800

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 2100) && (feature.get('Disponib39')  <= 2800));
    } else {
        return ((feature.get('Disponib39')  > 2100) && (feature.get('Disponib39')  <= 2800));
    }
}


function BiomasaNogal_43rule11_eval_expression(context) {
    // Disponib39 > 2800 AND Disponib39 <= 3500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 2800) && (feature.get('Disponib39')  <= 3500));
    } else {
        return ((feature.get('Disponib39')  > 2800) && (feature.get('Disponib39')  <= 3500));
    }
}


function BiomasaNogal_43rule12_eval_expression(context) {
    // Disponib39 > 3500 AND Disponib39 <= 4200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 3500) && (feature.get('Disponib39')  <= 4200));
    } else {
        return ((feature.get('Disponib39')  > 3500) && (feature.get('Disponib39')  <= 4200));
    }
}


function BiomasaNogal_43rule13_eval_expression(context) {
    // Disponib39 > 4200 AND Disponib39 <= 4900

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 4200) && (feature.get('Disponib39')  <= 4900));
    } else {
        return ((feature.get('Disponib39')  > 4200) && (feature.get('Disponib39')  <= 4900));
    }
}


function BiomasaNogal_43rule14_eval_expression(context) {
    // Disponib39 > 4900 AND Disponib39 <= 5600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 4900) && (feature.get('Disponib39')  <= 5600));
    } else {
        return ((feature.get('Disponib39')  > 4900) && (feature.get('Disponib39')  <= 5600));
    }
}


function BiomasaNogal_43rule15_eval_expression(context) {
    // Disponib39 > 5900 AND Disponib39 <= 6300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 5900) && (feature.get('Disponib39')  <= 6300));
    } else {
        return ((feature.get('Disponib39')  > 5900) && (feature.get('Disponib39')  <= 6300));
    }
}


function BiomasaNogal_43rule16_eval_expression(context) {
    // Disponib39 > 6300 AND Disponib39 <= 7000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 6300) && (feature.get('Disponib39')  <= 7000));
    } else {
        return ((feature.get('Disponib39')  > 6300) && (feature.get('Disponib39')  <= 7000));
    }
}


function BiomasaNogal_43rule17_eval_expression(context) {
    // Disponib39 > 7000 AND Disponib39 <= 7700

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib39')  > 7000) && (feature.get('Disponib39')  <= 7700));
    } else {
        return ((feature.get('Disponib39')  > 7000) && (feature.get('Disponib39')  <= 7700));
    }
}


function BiomasaDamasco_44rule0_eval_expression(context) {
    // Disponib33 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib33')  == 0);
    } else {
        return (feature.get('Disponib33')  == 0);
    }
}


function BiomasaDamasco_44rule1_eval_expression(context) {
    // Disponib33 >= 0.1 AND Disponib33 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  >= 0.1) && (feature.get('Disponib33')  <= 100));
    } else {
        return ((feature.get('Disponib33')  >= 0.1) && (feature.get('Disponib33')  <= 100));
    }
}


function BiomasaDamasco_44rule2_eval_expression(context) {
    // Disponib33 >= 100 AND Disponib33 <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  >= 100) && (feature.get('Disponib33')  <= 200));
    } else {
        return ((feature.get('Disponib33')  >= 100) && (feature.get('Disponib33')  <= 200));
    }
}


function BiomasaDamasco_44rule3_eval_expression(context) {
    // Disponib33 >= 200 AND Disponib33 <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  >= 200) && (feature.get('Disponib33')  <= 300));
    } else {
        return ((feature.get('Disponib33')  >= 200) && (feature.get('Disponib33')  <= 300));
    }
}


function BiomasaDamasco_44rule4_eval_expression(context) {
    // Disponib33 >= 300 AND Disponib33 <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  >= 300) && (feature.get('Disponib33')  <= 400));
    } else {
        return ((feature.get('Disponib33')  >= 300) && (feature.get('Disponib33')  <= 400));
    }
}


function BiomasaDamasco_44rule5_eval_expression(context) {
    // Disponib33 >= 400 AND Disponib33 <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  >= 400) && (feature.get('Disponib33')  <= 500));
    } else {
        return ((feature.get('Disponib33')  >= 400) && (feature.get('Disponib33')  <= 500));
    }
}


function BiomasaDamasco_44rule6_eval_expression(context) {
    // Disponib33 > 500 AND Disponib33 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  > 500) && (feature.get('Disponib33')  <= 1000));
    } else {
        return ((feature.get('Disponib33')  > 500) && (feature.get('Disponib33')  <= 1000));
    }
}


function BiomasaDamasco_44rule7_eval_expression(context) {
    // Disponib33 > 1000 AND Disponib33 <= 1500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  > 1000) && (feature.get('Disponib33')  <= 1500));
    } else {
        return ((feature.get('Disponib33')  > 1000) && (feature.get('Disponib33')  <= 1500));
    }
}


function BiomasaDamasco_44rule8_eval_expression(context) {
    // Disponib33 > 1500 AND Disponib33 <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  > 1500) && (feature.get('Disponib33')  <= 2000));
    } else {
        return ((feature.get('Disponib33')  > 1500) && (feature.get('Disponib33')  <= 2000));
    }
}


function BiomasaDamasco_44rule9_eval_expression(context) {
    // Disponib33 > 2000 AND Disponib33 <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  > 2000) && (feature.get('Disponib33')  <= 2500));
    } else {
        return ((feature.get('Disponib33')  > 2000) && (feature.get('Disponib33')  <= 2500));
    }
}


function BiomasaDamasco_44rule10_eval_expression(context) {
    // Disponib33 > 2500 AND Disponib33 <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  > 2500) && (feature.get('Disponib33')  <= 3000));
    } else {
        return ((feature.get('Disponib33')  > 2500) && (feature.get('Disponib33')  <= 3000));
    }
}


function BiomasaDamasco_44rule11_eval_expression(context) {
    // Disponib33 > 3000 AND Disponib33 <= 3500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  > 3000) && (feature.get('Disponib33')  <= 3500));
    } else {
        return ((feature.get('Disponib33')  > 3000) && (feature.get('Disponib33')  <= 3500));
    }
}


function BiomasaDamasco_44rule12_eval_expression(context) {
    // Disponib33 > 3500 AND Disponib33 <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  > 3500) && (feature.get('Disponib33')  <= 4000));
    } else {
        return ((feature.get('Disponib33')  > 3500) && (feature.get('Disponib33')  <= 4000));
    }
}


function BiomasaDamasco_44rule13_eval_expression(context) {
    // Disponib33 > 4000 AND Disponib33 <= 4500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  > 4000) && (feature.get('Disponib33')  <= 4500));
    } else {
        return ((feature.get('Disponib33')  > 4000) && (feature.get('Disponib33')  <= 4500));
    }
}


function BiomasaDamasco_44rule14_eval_expression(context) {
    // Disponib33 > 4500 AND Disponib33 <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  > 4500) && (feature.get('Disponib33')  <= 5000));
    } else {
        return ((feature.get('Disponib33')  > 4500) && (feature.get('Disponib33')  <= 5000));
    }
}


function BiomasaDamasco_44rule15_eval_expression(context) {
    // Disponib33 > 5000 AND Disponib33 <= 5500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib33')  > 5000) && (feature.get('Disponib33')  <= 5500));
    } else {
        return ((feature.get('Disponib33')  > 5000) && (feature.get('Disponib33')  <= 5500));
    }
}


function BiomasaManzano_45rule0_eval_expression(context) {
    // Disponib29 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib29')  == 0);
    } else {
        return (feature.get('Disponib29')  == 0);
    }
}


function BiomasaManzano_45rule1_eval_expression(context) {
    // Disponib29 >= 0.1 AND Disponib29 <= 350

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib29')  >= 0.1) && (feature.get('Disponib29')  <= 350));
    } else {
        return ((feature.get('Disponib29')  >= 0.1) && (feature.get('Disponib29')  <= 350));
    }
}


function BiomasaManzano_45rule2_eval_expression(context) {
    // Disponib29 >= 350 AND Disponib29 <= 700

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib29')  >= 350) && (feature.get('Disponib29')  <= 700));
    } else {
        return ((feature.get('Disponib29')  >= 350) && (feature.get('Disponib29')  <= 700));
    }
}


function BiomasaManzano_45rule3_eval_expression(context) {
    // Disponib29 > 700 AND Disponib29 <= 1400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib29')  > 700) && (feature.get('Disponib29')  <= 1400));
    } else {
        return ((feature.get('Disponib29')  > 700) && (feature.get('Disponib29')  <= 1400));
    }
}


function BiomasaManzano_45rule4_eval_expression(context) {
    // Disponib29 > 1400 AND Disponib29 <= 2100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib29')  > 1400) && (feature.get('Disponib29')  <= 2100));
    } else {
        return ((feature.get('Disponib29')  > 1400) && (feature.get('Disponib29')  <= 2100));
    }
}


function BiomasaManzano_45rule5_eval_expression(context) {
    // Disponib29 > 2100 AND Disponib29 <= 2800

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib29')  > 2100) && (feature.get('Disponib29')  <= 2800));
    } else {
        return ((feature.get('Disponib29')  > 2100) && (feature.get('Disponib29')  <= 2800));
    }
}


function BiomasaManzano_45rule6_eval_expression(context) {
    // Disponib29 > 2800 AND Disponib29 <= 3500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib29')  > 2800) && (feature.get('Disponib29')  <= 3500));
    } else {
        return ((feature.get('Disponib29')  > 2800) && (feature.get('Disponib29')  <= 3500));
    }
}


function BiomasaManzano_45rule7_eval_expression(context) {
    // Disponib29 > 3500 AND Disponib29 <= 4200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib29')  > 3500) && (feature.get('Disponib29')  <= 4200));
    } else {
        return ((feature.get('Disponib29')  > 3500) && (feature.get('Disponib29')  <= 4200));
    }
}


function BiomasaManzano_45rule8_eval_expression(context) {
    // Disponib29 > 4200 AND Disponib29 <= 4900

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib29')  > 4200) && (feature.get('Disponib29')  <= 4900));
    } else {
        return ((feature.get('Disponib29')  > 4200) && (feature.get('Disponib29')  <= 4900));
    }
}


function BiomasaManzano_45rule9_eval_expression(context) {
    // Disponib29 > 4900 AND Disponib29 <= 5600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib29')  > 4900) && (feature.get('Disponib29')  <= 5600));
    } else {
        return ((feature.get('Disponib29')  > 4900) && (feature.get('Disponib29')  <= 5600));
    }
}


function BiomasaManzano_45rule10_eval_expression(context) {
    // Disponib29 > 5600 AND Disponib29 <= 6300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib29')  > 5600) && (feature.get('Disponib29')  <= 6300));
    } else {
        return ((feature.get('Disponib29')  > 5600) && (feature.get('Disponib29')  <= 6300));
    }
}


function BiomasaManzano_45rule11_eval_expression(context) {
    // Disponib29 > 6300 AND Disponib29 <= 7000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib29')  > 6300) && (feature.get('Disponib29')  <= 7000));
    } else {
        return ((feature.get('Disponib29')  > 6300) && (feature.get('Disponib29')  <= 7000));
    }
}


function BiomasaManzano_45rule12_eval_expression(context) {
    // Disponib29 > 7000 AND Disponib29 <= 7700

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib29')  > 7000) && (feature.get('Disponib29')  <= 7700));
    } else {
        return ((feature.get('Disponib29')  > 7000) && (feature.get('Disponib29')  <= 7700));
    }
}


function BiomasaPeral_46rule0_eval_expression(context) {
    // Disponib25 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib25')  == 0);
    } else {
        return (feature.get('Disponib25')  == 0);
    }
}


function BiomasaPeral_46rule1_eval_expression(context) {
    // Disponib25 >= 0.1 AND Disponib25 <= 350

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  >= 0.1) && (feature.get('Disponib25')  <= 350));
    } else {
        return ((feature.get('Disponib25')  >= 0.1) && (feature.get('Disponib25')  <= 350));
    }
}


function BiomasaPeral_46rule2_eval_expression(context) {
    // Disponib25 >= 350 AND Disponib25 <= 700

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  >= 350) && (feature.get('Disponib25')  <= 700));
    } else {
        return ((feature.get('Disponib25')  >= 350) && (feature.get('Disponib25')  <= 700));
    }
}


function BiomasaPeral_46rule3_eval_expression(context) {
    // Disponib25 > 700 AND Disponib25 <= 1400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 700) && (feature.get('Disponib25')  <= 1400));
    } else {
        return ((feature.get('Disponib25')  > 700) && (feature.get('Disponib25')  <= 1400));
    }
}


function BiomasaPeral_46rule4_eval_expression(context) {
    // Disponib25 > 1400 AND Disponib25 <= 2100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 1400) && (feature.get('Disponib25')  <= 2100));
    } else {
        return ((feature.get('Disponib25')  > 1400) && (feature.get('Disponib25')  <= 2100));
    }
}


function BiomasaPeral_46rule5_eval_expression(context) {
    // Disponib25 > 2100 AND Disponib25 <= 2800

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 2100) && (feature.get('Disponib25')  <= 2800));
    } else {
        return ((feature.get('Disponib25')  > 2100) && (feature.get('Disponib25')  <= 2800));
    }
}


function BiomasaPeral_46rule6_eval_expression(context) {
    // Disponib25 > 2800 AND Disponib25 <= 3500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 2800) && (feature.get('Disponib25')  <= 3500));
    } else {
        return ((feature.get('Disponib25')  > 2800) && (feature.get('Disponib25')  <= 3500));
    }
}


function BiomasaPeral_46rule7_eval_expression(context) {
    // Disponib25 > 3500 AND Disponib25 <= 4200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 3500) && (feature.get('Disponib25')  <= 4200));
    } else {
        return ((feature.get('Disponib25')  > 3500) && (feature.get('Disponib25')  <= 4200));
    }
}


function BiomasaPeral_46rule8_eval_expression(context) {
    // Disponib25 > 4200 AND Disponib25 <= 4900

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 4200) && (feature.get('Disponib25')  <= 4900));
    } else {
        return ((feature.get('Disponib25')  > 4200) && (feature.get('Disponib25')  <= 4900));
    }
}


function BiomasaPeral_46rule9_eval_expression(context) {
    // Disponib25 > 4900 AND Disponib25 <= 5600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 4900) && (feature.get('Disponib25')  <= 5600));
    } else {
        return ((feature.get('Disponib25')  > 4900) && (feature.get('Disponib25')  <= 5600));
    }
}


function BiomasaPeral_46rule10_eval_expression(context) {
    // Disponib25 > 5600 AND Disponib25 <= 6300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 5600) && (feature.get('Disponib25')  <= 6300));
    } else {
        return ((feature.get('Disponib25')  > 5600) && (feature.get('Disponib25')  <= 6300));
    }
}


function BiomasaPeral_46rule11_eval_expression(context) {
    // Disponib25 > 6300 AND Disponib25 <= 7000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 6300) && (feature.get('Disponib25')  <= 7000));
    } else {
        return ((feature.get('Disponib25')  > 6300) && (feature.get('Disponib25')  <= 7000));
    }
}


function BiomasaPeral_46rule12_eval_expression(context) {
    // Disponib25 > 7000 AND Disponib25 <= 7700

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib25')  > 7000) && (feature.get('Disponib25')  <= 7700));
    } else {
        return ((feature.get('Disponib25')  > 7000) && (feature.get('Disponib25')  <= 7700));
    }
}


function BiomasaOlivo_47rule0_eval_expression(context) {
    // Disponib21 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib21')  == 0);
    } else {
        return (feature.get('Disponib21')  == 0);
    }
}


function BiomasaOlivo_47rule1_eval_expression(context) {
    // Disponib21 >= 0.1 AND Disponib21 <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib21')  >= 0.1) && (feature.get('Disponib21')  <= 500));
    } else {
        return ((feature.get('Disponib21')  >= 0.1) && (feature.get('Disponib21')  <= 500));
    }
}


function BiomasaOlivo_47rule2_eval_expression(context) {
    // Disponib21 >= 500 AND Disponib21 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib21')  >= 500) && (feature.get('Disponib21')  <= 1000));
    } else {
        return ((feature.get('Disponib21')  >= 500) && (feature.get('Disponib21')  <= 1000));
    }
}


function BiomasaOlivo_47rule3_eval_expression(context) {
    // Disponib21 >= 1000 AND Disponib21 <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib21')  >= 1000) && (feature.get('Disponib21')  <= 2000));
    } else {
        return ((feature.get('Disponib21')  >= 1000) && (feature.get('Disponib21')  <= 2000));
    }
}


function BiomasaOlivo_47rule4_eval_expression(context) {
    // Disponib21 >= 2000 AND Disponib21 <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib21')  >= 2000) && (feature.get('Disponib21')  <= 3000));
    } else {
        return ((feature.get('Disponib21')  >= 2000) && (feature.get('Disponib21')  <= 3000));
    }
}


function BiomasaOlivo_47rule5_eval_expression(context) {
    // Disponib21 >= 3000 AND Disponib21 <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib21')  >= 3000) && (feature.get('Disponib21')  <= 4000));
    } else {
        return ((feature.get('Disponib21')  >= 3000) && (feature.get('Disponib21')  <= 4000));
    }
}


function BiomasaOlivo_47rule6_eval_expression(context) {
    // Disponib21 >= 4000 AND Disponib21 <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib21')  >= 4000) && (feature.get('Disponib21')  <= 5000));
    } else {
        return ((feature.get('Disponib21')  >= 4000) && (feature.get('Disponib21')  <= 5000));
    }
}


function BiomasaOlivo_47rule7_eval_expression(context) {
    // Disponib21 > 5000 AND Disponib21 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib21')  > 5000) && (feature.get('Disponib21')  <= 10000));
    } else {
        return ((feature.get('Disponib21')  > 5000) && (feature.get('Disponib21')  <= 10000));
    }
}


function BiomasaOlivo_47rule8_eval_expression(context) {
    // Disponib21 > 10000 AND Disponib21 <= 15000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib21')  > 10000) && (feature.get('Disponib21')  <= 15000));
    } else {
        return ((feature.get('Disponib21')  > 10000) && (feature.get('Disponib21')  <= 15000));
    }
}


function BiomasaOlivo_47rule9_eval_expression(context) {
    // Disponib21 > 15000 AND Disponib21 <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib21')  > 15000) && (feature.get('Disponib21')  <= 20000));
    } else {
        return ((feature.get('Disponib21')  > 15000) && (feature.get('Disponib21')  <= 20000));
    }
}


function BiomasaDuraznero_48rule0_eval_expression(context) {
    // Disponib19 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib19')  == 0);
    } else {
        return (feature.get('Disponib19')  == 0);
    }
}


function BiomasaDuraznero_48rule1_eval_expression(context) {
    // Disponib19 >= 0.1 AND Disponib19 <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib19')  >= 0.1) && (feature.get('Disponib19')  <= 100));
    } else {
        return ((feature.get('Disponib19')  >= 0.1) && (feature.get('Disponib19')  <= 100));
    }
}


function BiomasaDuraznero_48rule2_eval_expression(context) {
    // Disponib19 >= 100 AND Disponib19 <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib19')  >= 100) && (feature.get('Disponib19')  <= 500));
    } else {
        return ((feature.get('Disponib19')  >= 100) && (feature.get('Disponib19')  <= 500));
    }
}


function BiomasaDuraznero_48rule3_eval_expression(context) {
    // Disponib19 >= 500 AND Disponib19 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib19')  >= 500) && (feature.get('Disponib19')  <= 1000));
    } else {
        return ((feature.get('Disponib19')  >= 500) && (feature.get('Disponib19')  <= 1000));
    }
}


function BiomasaDuraznero_48rule4_eval_expression(context) {
    // Disponib19 >= 1000 AND Disponib19 <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib19')  >= 1000) && (feature.get('Disponib19')  <= 2000));
    } else {
        return ((feature.get('Disponib19')  >= 1000) && (feature.get('Disponib19')  <= 2000));
    }
}


function BiomasaDuraznero_48rule5_eval_expression(context) {
    // Disponib19 >= 2000 AND Disponib19 <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib19')  >= 2000) && (feature.get('Disponib19')  <= 3000));
    } else {
        return ((feature.get('Disponib19')  >= 2000) && (feature.get('Disponib19')  <= 3000));
    }
}


function BiomasaDuraznero_48rule6_eval_expression(context) {
    // Disponib19 >= 3000 AND Disponib19 <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib19')  >= 3000) && (feature.get('Disponib19')  <= 4000));
    } else {
        return ((feature.get('Disponib19')  >= 3000) && (feature.get('Disponib19')  <= 4000));
    }
}


function BiomasaDuraznero_48rule7_eval_expression(context) {
    // Disponib19 >= 4000 AND Disponib19 <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib19')  >= 4000) && (feature.get('Disponib19')  <= 5000));
    } else {
        return ((feature.get('Disponib19')  >= 4000) && (feature.get('Disponib19')  <= 5000));
    }
}


function BiomasaDuraznero_48rule8_eval_expression(context) {
    // Disponib19 > 5000 AND Disponib19 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib19')  > 5000) && (feature.get('Disponib19')  <= 10000));
    } else {
        return ((feature.get('Disponib19')  > 5000) && (feature.get('Disponib19')  <= 10000));
    }
}


function BiomasaDuraznero_48rule9_eval_expression(context) {
    // Disponib19 > 10000 AND Disponib19 <= 15000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib19')  > 10000) && (feature.get('Disponib19')  <= 15000));
    } else {
        return ((feature.get('Disponib19')  > 10000) && (feature.get('Disponib19')  <= 15000));
    }
}


function BiomasaDuraznero_48rule10_eval_expression(context) {
    // Disponib19 > 15000 AND Disponib19 <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib19')  > 15000) && (feature.get('Disponib19')  <= 20000));
    } else {
        return ((feature.get('Disponib19')  > 15000) && (feature.get('Disponib19')  <= 20000));
    }
}


function BiomasaDuraznero_48rule11_eval_expression(context) {
    // Disponib19 > 20000 AND Disponib19 <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib19')  > 20000) && (feature.get('Disponib19')  <= 25000));
    } else {
        return ((feature.get('Disponib19')  > 20000) && (feature.get('Disponib19')  <= 25000));
    }
}


function BiomasaCiruelo_49rule0_eval_expression(context) {
    // Disponib16 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib16')  == 0);
    } else {
        return (feature.get('Disponib16')  == 0);
    }
}


function BiomasaCiruelo_49rule1_eval_expression(context) {
    // Disponib16 > 0 AND Disponib16 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  > 0) && (feature.get('Disponib16')  <= 1000));
    } else {
        return ((feature.get('Disponib16')  > 0) && (feature.get('Disponib16')  <= 1000));
    }
}


function BiomasaCiruelo_49rule2_eval_expression(context) {
    // Disponib16 >= 1000 AND Disponib16 <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  >= 1000) && (feature.get('Disponib16')  <= 2000));
    } else {
        return ((feature.get('Disponib16')  >= 1000) && (feature.get('Disponib16')  <= 2000));
    }
}


function BiomasaCiruelo_49rule3_eval_expression(context) {
    // Disponib16 >= 2000 AND Disponib16 <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  >= 2000) && (feature.get('Disponib16')  <= 3000));
    } else {
        return ((feature.get('Disponib16')  >= 2000) && (feature.get('Disponib16')  <= 3000));
    }
}


function BiomasaCiruelo_49rule4_eval_expression(context) {
    // Disponib16 >= 3000 AND Disponib16 <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  >= 3000) && (feature.get('Disponib16')  <= 4000));
    } else {
        return ((feature.get('Disponib16')  >= 3000) && (feature.get('Disponib16')  <= 4000));
    }
}


function BiomasaCiruelo_49rule5_eval_expression(context) {
    // Disponib16 >= 4000 AND Disponib16 <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  >= 4000) && (feature.get('Disponib16')  <= 5000));
    } else {
        return ((feature.get('Disponib16')  >= 4000) && (feature.get('Disponib16')  <= 5000));
    }
}


function BiomasaCiruelo_49rule6_eval_expression(context) {
    // Disponib16 >= 5000 AND Disponib16 <= 6000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  >= 5000) && (feature.get('Disponib16')  <= 6000));
    } else {
        return ((feature.get('Disponib16')  >= 5000) && (feature.get('Disponib16')  <= 6000));
    }
}


function BiomasaCiruelo_49rule7_eval_expression(context) {
    // Disponib16 >= 6000 AND Disponib16 <= 7000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  >= 6000) && (feature.get('Disponib16')  <= 7000));
    } else {
        return ((feature.get('Disponib16')  >= 6000) && (feature.get('Disponib16')  <= 7000));
    }
}


function BiomasaCiruelo_49rule8_eval_expression(context) {
    // Disponib16 >= 7000 AND Disponib16 <= 8000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  >= 7000) && (feature.get('Disponib16')  <= 8000));
    } else {
        return ((feature.get('Disponib16')  >= 7000) && (feature.get('Disponib16')  <= 8000));
    }
}


function BiomasaCiruelo_49rule9_eval_expression(context) {
    // Disponib16 >= 8000 AND Disponib16 <= 9000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  >= 8000) && (feature.get('Disponib16')  <= 9000));
    } else {
        return ((feature.get('Disponib16')  >= 8000) && (feature.get('Disponib16')  <= 9000));
    }
}


function BiomasaCiruelo_49rule10_eval_expression(context) {
    // Disponib16 >= 9000 AND Disponib16 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  >= 9000) && (feature.get('Disponib16')  <= 10000));
    } else {
        return ((feature.get('Disponib16')  >= 9000) && (feature.get('Disponib16')  <= 10000));
    }
}


function BiomasaCiruelo_49rule11_eval_expression(context) {
    // Disponib16 > 10000 AND Disponib16 <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  > 10000) && (feature.get('Disponib16')  <= 20000));
    } else {
        return ((feature.get('Disponib16')  > 10000) && (feature.get('Disponib16')  <= 20000));
    }
}


function BiomasaCiruelo_49rule12_eval_expression(context) {
    // Disponib16 > 20000 AND Disponib16 <= 30000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  > 20000) && (feature.get('Disponib16')  <= 30000));
    } else {
        return ((feature.get('Disponib16')  > 20000) && (feature.get('Disponib16')  <= 30000));
    }
}


function BiomasaCiruelo_49rule13_eval_expression(context) {
    // Disponib16 > 30000 AND Disponib16 <= 40000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  > 30000) && (feature.get('Disponib16')  <= 40000));
    } else {
        return ((feature.get('Disponib16')  > 30000) && (feature.get('Disponib16')  <= 40000));
    }
}


function BiomasaCiruelo_49rule14_eval_expression(context) {
    // Disponib16 > 40000 AND Disponib16 <= 50000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  > 40000) && (feature.get('Disponib16')  <= 50000));
    } else {
        return ((feature.get('Disponib16')  > 40000) && (feature.get('Disponib16')  <= 50000));
    }
}


function BiomasaCiruelo_49rule15_eval_expression(context) {
    // Disponib16 > 50000 AND Disponib16 <= 60000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  > 50000) && (feature.get('Disponib16')  <= 60000));
    } else {
        return ((feature.get('Disponib16')  > 50000) && (feature.get('Disponib16')  <= 60000));
    }
}


function BiomasaCiruelo_49rule16_eval_expression(context) {
    // Disponib16 > 60000 AND Disponib16 <= 70000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib16')  > 60000) && (feature.get('Disponib16')  <= 70000));
    } else {
        return ((feature.get('Disponib16')  > 60000) && (feature.get('Disponib16')  <= 70000));
    }
}


function BiomasaVidespaldero_50rule0_eval_expression(context) {
    // Disponib_9 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib_9')  == 0);
    } else {
        return (feature.get('Disponib_9')  == 0);
    }
}


function BiomasaVidespaldero_50rule1_eval_expression(context) {
    // Disponib_9 > 0 AND Disponib_9 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_9')  > 0) && (feature.get('Disponib_9')  <= 1000));
    } else {
        return ((feature.get('Disponib_9')  > 0) && (feature.get('Disponib_9')  <= 1000));
    }
}


function BiomasaVidespaldero_50rule2_eval_expression(context) {
    // Disponib_9 >= 1000 AND Disponib_9 <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_9')  >= 1000) && (feature.get('Disponib_9')  <= 2000));
    } else {
        return ((feature.get('Disponib_9')  >= 1000) && (feature.get('Disponib_9')  <= 2000));
    }
}


function BiomasaVidespaldero_50rule3_eval_expression(context) {
    // Disponib_9 >= 2000 AND Disponib_9 <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_9')  >= 2000) && (feature.get('Disponib_9')  <= 3000));
    } else {
        return ((feature.get('Disponib_9')  >= 2000) && (feature.get('Disponib_9')  <= 3000));
    }
}


function BiomasaVidespaldero_50rule4_eval_expression(context) {
    // Disponib_9 >= 3000 AND Disponib_9 <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_9')  >= 3000) && (feature.get('Disponib_9')  <= 4000));
    } else {
        return ((feature.get('Disponib_9')  >= 3000) && (feature.get('Disponib_9')  <= 4000));
    }
}


function BiomasaVidespaldero_50rule5_eval_expression(context) {
    // Disponib_9 >= 4000 AND Disponib_9 <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_9')  >= 4000) && (feature.get('Disponib_9')  <= 5000));
    } else {
        return ((feature.get('Disponib_9')  >= 4000) && (feature.get('Disponib_9')  <= 5000));
    }
}


function BiomasaVidespaldero_50rule6_eval_expression(context) {
    // Disponib_9 > 5000 AND Disponib_9 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_9')  > 5000) && (feature.get('Disponib_9')  <= 10000));
    } else {
        return ((feature.get('Disponib_9')  > 5000) && (feature.get('Disponib_9')  <= 10000));
    }
}


function BiomasaVidespaldero_50rule7_eval_expression(context) {
    // Disponib_9 > 10000 AND Disponib_9 <= 15000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_9')  > 10000) && (feature.get('Disponib_9')  <= 15000));
    } else {
        return ((feature.get('Disponib_9')  > 10000) && (feature.get('Disponib_9')  <= 15000));
    }
}


function BiomasaVidespaldero_50rule8_eval_expression(context) {
    // Disponib_9 > 15000 AND Disponib_9 <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_9')  > 15000) && (feature.get('Disponib_9')  <= 20000));
    } else {
        return ((feature.get('Disponib_9')  > 15000) && (feature.get('Disponib_9')  <= 20000));
    }
}


function BiomasaVidespaldero_50rule9_eval_expression(context) {
    // Disponib_9 > 20000 AND Disponib_9 <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_9')  > 20000) && (feature.get('Disponib_9')  <= 25000));
    } else {
        return ((feature.get('Disponib_9')  > 20000) && (feature.get('Disponib_9')  <= 25000));
    }
}


function BiomasaVidparral_51rule0_eval_expression(context) {
    // Disponib_4 = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Disponib_4')  == 0.0);
    } else {
        return (feature.get('Disponib_4')  == 0.0);
    }
}


function BiomasaVidparral_51rule1_eval_expression(context) {
    // Disponib_4 > 0 AND Disponib_4 <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 0) && (feature.get('Disponib_4')  <= 500));
    } else {
        return ((feature.get('Disponib_4')  > 0) && (feature.get('Disponib_4')  <= 500));
    }
}


function BiomasaVidparral_51rule2_eval_expression(context) {
    // Disponib_4 >= 500 AND Disponib_4 <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  >= 500) && (feature.get('Disponib_4')  <= 1000));
    } else {
        return ((feature.get('Disponib_4')  >= 500) && (feature.get('Disponib_4')  <= 1000));
    }
}


function BiomasaVidparral_51rule3_eval_expression(context) {
    // Disponib_4 >= 1000 AND Disponib_4 <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  >= 1000) && (feature.get('Disponib_4')  <= 2000));
    } else {
        return ((feature.get('Disponib_4')  >= 1000) && (feature.get('Disponib_4')  <= 2000));
    }
}


function BiomasaVidparral_51rule4_eval_expression(context) {
    // Disponib_4 >= 2000 AND Disponib_4 <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  >= 2000) && (feature.get('Disponib_4')  <= 4000));
    } else {
        return ((feature.get('Disponib_4')  >= 2000) && (feature.get('Disponib_4')  <= 4000));
    }
}


function BiomasaVidparral_51rule5_eval_expression(context) {
    // Disponib_4 >= 4000 AND Disponib_4 <= 6000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  >= 4000) && (feature.get('Disponib_4')  <= 6000));
    } else {
        return ((feature.get('Disponib_4')  >= 4000) && (feature.get('Disponib_4')  <= 6000));
    }
}


function BiomasaVidparral_51rule6_eval_expression(context) {
    // Disponib_4 >= 6000 AND Disponib_4 <= 8000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  >= 6000) && (feature.get('Disponib_4')  <= 8000));
    } else {
        return ((feature.get('Disponib_4')  >= 6000) && (feature.get('Disponib_4')  <= 8000));
    }
}


function BiomasaVidparral_51rule7_eval_expression(context) {
    // Disponib_4 >= 8000 AND Disponib_4 <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  >= 8000) && (feature.get('Disponib_4')  <= 10000));
    } else {
        return ((feature.get('Disponib_4')  >= 8000) && (feature.get('Disponib_4')  <= 10000));
    }
}


function BiomasaVidparral_51rule8_eval_expression(context) {
    // Disponib_4 > 10000 AND Disponib_4 <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 10000) && (feature.get('Disponib_4')  <= 20000));
    } else {
        return ((feature.get('Disponib_4')  > 10000) && (feature.get('Disponib_4')  <= 20000));
    }
}


function BiomasaVidparral_51rule9_eval_expression(context) {
    // Disponib_4 > 20000 AND Disponib_4 <= 30000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 20000) && (feature.get('Disponib_4')  <= 30000));
    } else {
        return ((feature.get('Disponib_4')  > 20000) && (feature.get('Disponib_4')  <= 30000));
    }
}


function BiomasaVidparral_51rule10_eval_expression(context) {
    // Disponib_4 > 30000 AND Disponib_4 <= 40000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 30000) && (feature.get('Disponib_4')  <= 40000));
    } else {
        return ((feature.get('Disponib_4')  > 30000) && (feature.get('Disponib_4')  <= 40000));
    }
}


function BiomasaVidparral_51rule11_eval_expression(context) {
    // Disponib_4 > 40000 AND Disponib_4 <= 50000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 40000) && (feature.get('Disponib_4')  <= 50000));
    } else {
        return ((feature.get('Disponib_4')  > 40000) && (feature.get('Disponib_4')  <= 50000));
    }
}


function BiomasaVidparral_51rule12_eval_expression(context) {
    // Disponib_4 > 50000 AND Disponib_4 <= 60000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Disponib_4')  > 50000) && (feature.get('Disponib_4')  <= 60000));
    } else {
        return ((feature.get('Disponib_4')  > 50000) && (feature.get('Disponib_4')  <= 60000));
    }
}