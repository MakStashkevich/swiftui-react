
import SwiftUI

struct HStackExamplesView: View {
    var body: some View {
        List {
            HStack {
                Text("Item 1")
                Text("Item 2")
                Text("Item 3")
            }
            .navigationTitle("Default HStack")
            
            HStack(alignment: .center, spacing: 20) {
                Image(systemName: "star.fill")
                Text("Centered with 20pt spacing")
                Image(systemName: "heart.fill")
            }
            .navigationTitle("Styled HStack")
        }
        .navigationTitle("HStack Examples")
    }
}

struct HStackExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        HStackExamplesView()
    }
}
