<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Check if a file was uploaded
    if (isset($_FILES["image"]) && $_FILES["image"]["error"] === UPLOAD_ERR_OK) {
        $targetDir = "uploads/";  // Specify the directory to store uploads

        // Ensure the target directory exists; create it if not
        if (!file_exists($targetDir)) {
            mkdir($targetDir, 0777, true);
        }

        // Generate a unique filename to prevent overwriting
        $filename = uniqid("image_") . "_" . basename($_FILES["image"]["name"]);
        $targetPath = $targetDir . $filename;

        // Move the uploaded file to the target path
        if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetPath)) {
            // Provide the image URL as a response
            $imageUrl = $_SERVER["HTTP_HOST"] . "/" . $targetPath;
            echo json_encode(["success" => true, "imageUrl" => $imageUrl]);
        } else {
            echo json_encode(["success" => false, "message" => "Error moving file"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "No file uploaded"]);
    }
} else {
    // Display images from the "uploads" directory
    $imageDirectory = "uploads/";

    // Get all image files in the directory
    $imageFiles = glob($imageDirectory . "*.{jpg,jpeg,png,gif}", GLOB_BRACE);

    // Output HTML for displaying images
    echo "<html><body><h1>Image Gallery</h1>";
    foreach ($imageFiles as $imageFile) {
        echo "<img src='$imageFile' alt='Image'><br>";
    }
    echo "</body></html>";
}
?>