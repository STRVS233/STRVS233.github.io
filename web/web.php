<?php
if(isset($_GET['url'])) {
    $url = urldecode($_GET['url']);
    $sourceCode = file_get_contents($url);

    if($sourceCode !== false) {
        echo htmlspecialchars($sourceCode);
    } else {
        echo "Error fetching source code.";
    }
} else {
    echo "URL parameter missing.";
}
?>
