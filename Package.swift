// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorCommunityAppleSignIn",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorCommunityAppleSignIn",
            targets: ["SignInWithApple"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "SignInWithApple",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/SignInWithApple"),
        .testTarget(
            name: "SignInWithAppleTests",
            dependencies: ["SignInWithApple"],
            path: "ios/Tests/SignInWithAppleTests")
    ]
)