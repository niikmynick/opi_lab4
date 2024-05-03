package com.example.weblab3.beans;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

@Named
@ApplicationScoped
public class SVGBean {
    private String SVG = """
        <svg id="graphSVG" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="400" height="400">
              <!-- Scopes -->
              <polygon class="figure" points="200,200 200,150 300,200" fill="#ADD8E6" />
              <rect class="figure" x="200" y="200" width="100" height="50" fill="#ADD8E6" />
              <circle class="figure" cx="200" cy="200" r="100" fill="#ADD8E6" mask="url(#mask)" />
              <mask id="mask">
                <rect x="0" y="0" width="200" height="200" fill="#FFFFFF" />
              </mask>
                
              <!-- X-axis -->
              <line x1="50" y1="200" x2="350" y2="200" stroke="#000000" stroke-width="2px" />
                
              <!-- Y-axis -->
              <line x1="200" y1="50" x2="200" y2="350" stroke="#000000" stroke-width="2px" />
                
              <!-- X-axis arrow -->
              <polygon points="350,200 340,190 340,210" fill="black" />
                
              <!-- Y-axis arrow -->
              <polygon points="200,50 190,60 210,60" fill="black" />
                
              <!-- X-axis labels -->
              <circle cx="100" cy="200" r="3" fill="black" />
                
              <text x="100" y="220" text-anchor="middle" class="r-minus-label"> -R </text>
                
              <circle cx="150" cy="200" r="3" fill="black" />
              <text x="150" y="220" text-anchor="middle" class="r-half-minus-label"> -R/2 </text>
                
              <circle cx="250" cy="200" r="3" fill="black" />
              <text x="250" y="220" text-anchor="middle" class="r-half-label"> R/2 </text>
                
              <circle cx="300" cy="200" r="3" fill="black" />
              <text x="300" y="220" text-anchor="middle" class="r-label"> R </text>
                
              <text x="344" y="230" text-anchor="middle">X</text>
                
              <!-- Y-axis labels -->
              <circle cx="200" cy="100" r="3" fill="black" />
              <text x="180" y="104" text-anchor="middle" class="r-label"> R </text>
                
              <circle cx="200" cy="150" r="3" fill="black" />
              <text x="180" y="154" text-anchor="middle" class="r-half-label"> R/2 </text>
                
              <circle cx="200" cy="300" r="3" fill="black" />
              <text x="180" y="254" text-anchor="middle" class="r-half-minus-label"> -R/2 </text>
                
              <circle cx="200" cy="250" r="3" fill="black" />
              <text x="180" y="304" text-anchor="middle" class="r-minus-label"> -R </text>
                
              <text x="180" y="60" text-anchor="middle">Y</text>
                
              <!-- Hit point -->
                
              <circle cx="200" cy="200" r="3" fill="#FF0000" id="point" />
                
        </svg>
        """;

    public String getSVG() {
        return SVG;
    }

    public void setSVG(String svg) {
        this.SVG = svg;
    }

    public void updateSVG(Hit hit) {
        double centerX = 200;
        double centerY = 200;
        double scaleFactor = 100 / hit.getR();

        double scaledX = (hit.getX() * scaleFactor) + centerX;
        double scaledY = (hit.getY() * -scaleFactor) + centerY;

        this.SVG = this.SVG + String.format("<circle cx=\"%s\" cy=\"%s\" r=\"%s\" fill=\"#FF0000\" id=\"point\" />", scaledX, scaledY, hit.getR());
    }
}
