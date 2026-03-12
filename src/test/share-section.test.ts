import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShareSection from "@/components/ShareSection";

// Mock the toast hook
vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}));

describe("ShareSection Component", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();

    // Mock window.location.href
    Object.defineProperty(window, "location", {
      value: {
        href: "https://example.com/report/12345",
      },
      writable: true,
    });
  });

  it("renders share section with all buttons", () => {
    render(
      <BrowserRouter>
        <ShareSection userName="John Doe" />
      </BrowserRouter>
    );

    // Check for section title
    expect(screen.getByText("Share Your LifeMap")).toBeInTheDocument();

    // Check for all three buttons
    expect(screen.getByText("Share Report")).toBeInTheDocument();
    expect(screen.getByText("Copy Link")).toBeInTheDocument();
    expect(screen.getByText("WhatsApp")).toBeInTheDocument();

    // Check for subtext
    expect(
      screen.getByText("Let your friends discover their cosmic insights too.")
    ).toBeInTheDocument();
  });

  it("renders with default props when not provided", () => {
    render(
      <BrowserRouter>
        <ShareSection />
      </BrowserRouter>
    );

    expect(screen.getByText("Share Your LifeMap")).toBeInTheDocument();
  });

  it("displays hint text at the bottom", () => {
    render(
      <BrowserRouter>
        <ShareSection />
      </BrowserRouter>
    );

    expect(
      screen.getByText(
        "Share your cosmic blueprint and inspire others to explore their own cosmic journey."
      )
    ).toBeInTheDocument();
  });

  it("handles Web Share API if available", async () => {
    const mockShare = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "share", {
      value: mockShare,
      writable: true,
    });

    const { getByText } = render(
      <BrowserRouter>
        <ShareSection userName="Jane Doe" />
      </BrowserRouter>
    );

    // Simulate clicking Share Report button
    const shareButton = getByText("Share Report");
    fireEvent.click(shareButton);

    // Wait a bit for async operation
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Verify navigator.share was called with correct data
    expect(mockShare).toHaveBeenCalledWith({
      title: "Jane Doe's LifeMap",
      text: "Discover your cosmic insights with LifeMap",
      url: "https://example.com/report/12345",
    });
  });

  it("falls back to clipboard copy when Web Share API is not available", async () => {
    // Mock navigator.share as undefined
    Object.defineProperty(navigator, "share", {
      value: undefined,
      writable: true,
    });

    // Mock clipboard API
    const mockWriteText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });

    Object.defineProperty(window, "isSecureContext", {
      value: true,
      writable: true,
    });

    const { getByText } = render(
      <BrowserRouter>
        <ShareSection />
      </BrowserRouter>
    );

    const shareButton = getByText("Share Report");
    fireEvent.click(shareButton);

    await new Promise((resolve) => setTimeout(resolve, 100));

    // Verify clipboard.writeText was called
    expect(mockWriteText).toHaveBeenCalledWith("https://example.com/report/12345");
  });

  it("opens WhatsApp when WhatsApp button is clicked", () => {
    const mockWindowOpen = vi.fn();
    window.open = mockWindowOpen;

    const { getByText } = render(
      <BrowserRouter>
        <ShareSection />
      </BrowserRouter>
    );

    const whatsappButton = getByText("WhatsApp");
    fireEvent.click(whatsappButton);

    // Verify window.open was called with WhatsApp URL
    expect(mockWindowOpen).toHaveBeenCalledWith(
      expect.stringContaining("https://wa.me/?text="),
      "_blank",
      "noopener,noreferrer"
    );
  });

  it("renders buttons with correct styling classes", () => {
    const { container } = render(
      <BrowserRouter>
        <ShareSection />
      </BrowserRouter>
    );

    // Check for the glass-card-glow styling on the container
    const card = container.querySelector(".glass-card-glow");
    expect(card).toBeInTheDocument();

    // Check that buttons are present
    const buttons = container.querySelectorAll("button");
    expect(buttons).toHaveLength(3);
  });

  it("renders responsive layout", () => {
    const { container } = render(
      <BrowserRouter>
        <ShareSection />
      </BrowserRouter>
    );

    // Check for responsive grid classes
    const grid = container.querySelector(".grid");
    expect(grid).toHaveClass("grid-cols-1", "sm:grid-cols-3", "gap-3");
  });

  it("includes all required icons", () => {
    const { container } = render(
      <BrowserRouter>
        <ShareSection />
      </BrowserRouter>
    );

    // Check for SVG icons (lucide-react renders icons as SVG)
    const icons = container.querySelectorAll("svg");
    // Should have share, link, and message circle icons
    expect(icons.length).toBeGreaterThanOrEqual(3);
  });
});
