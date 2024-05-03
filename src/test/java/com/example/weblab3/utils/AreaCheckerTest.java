package com.example.weblab3.utils;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AreaCheckerTest {

    @Test
    void isHit() {
        assertTrue(AreaChecker.isHit(1, 1, 3));

        assertTrue(AreaChecker.isHit(1, 1, -3));

        assertFalse(AreaChecker.isHit(-1, -1, 3));

        assertFalse(AreaChecker.isHit(-1, -1, -3));

        assertTrue(AreaChecker.isHit(0, 0, 3));

        assertTrue(AreaChecker.isHit(0, 0, -3));
    }
}